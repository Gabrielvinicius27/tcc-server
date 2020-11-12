'use strict'

const { findOrFail } = require("../../Models/Produto")
const Database = use('Database')
const Produto = use('App/Models/Produto')
const ProdutoUnidade = use("App/Models/ProdutoUnidade")

class ProdutoUnidadeController {

    async store({request,response}) {
        const data = request.only([
          'produto_barcode',
          'value_code',
          'numero_lote',
          'data_validade',
          'status',
          'local',
          'descricao'
        ])

        const produto_id = await Database.select('id')
        .from('produtos')
        .where('barcode',data['produto_barcode'])

        const estoque_id = await Database.select('id')
        .from('estoques')
        .where('nome', data['local'])
     
        const produtoUnidade = await ProdutoUnidade
        .create({...data,'produto_id':produto_id[0].id,'estoque_id':estoque_id[0].id})
        
        return produtoUnidade
    }

    async updateLocal ({ params, request, response }) {
      const produtoUnidade = await ProdutoUnidade.findBy('value_code',params.id)
    
      const data = request.only([
        'status',
        'local',
      ])

      const estoque_id = await Database.select('id')
      .from('estoques')
      .where('nome', data['local'])

      produtoUnidade.merge({...data,'estoque_id':estoque_id[0].id})
    
      await produtoUnidade.save()
    
      return produtoUnidade
    }

    async index () {
      const produtosUnidade = ProdutoUnidade.all()
      return produtosUnidade
    }

    async show ({ params }) {
      const produtoUnidade = ProdutoUnidade.query()
        .whereRaw(`value_code LIKE '${params.id}%'`)
        .with('statusProduto')
        .fetch()
      return produtoUnidade
    }

    async showProdutoUnidadeEqual({params}){
      const produtoUnidade = ProdutoUnidade.query()
        .whereRaw(`value_code = '${params.id}'`)
        .with('statusProduto')
        .fetch()
      return produtoUnidade
    }

    async destroy ({ params, auth, response }) {
      const produtoUnidade = await ProdutoUnidade.findOrFail(params.id)
    
      await produtoUnidade.delete()
  }

}

module.exports = ProdutoUnidadeController
