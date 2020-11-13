'use strict'

const Database = use('Database')
const ProdutoMeta = use('App/Models/ProdutoMeta')

class ProdutoMetaController {

    async store({request,response}) {
        const data = request.only([
          'produto_barcode',
          'estoque_minimo',
          'estoque_maximo',
          'temperatura_minima',
          'temperatura_maxima',
          'umidade_minima',
          'umidade_maxima',
          'qtde_dias_vender_antes_vencimento',
        ])

        const produto = await Database.select('id')
        .from('produtos')
        .where('barcode',data['produto_barcode'])

        const produtoMeta = await ProdutoMeta
        .create(
            {
                ...data,
                'produto_id':produto[0].id,
            }
        )
        
        return produtoMeta
    }

    async update ({ params, request, response }) {
      const produtoMeta = await ProdutoMeta.findBy('produto_barcode',params.id)
      const data = request.only([
          'estoque_minimo',
          'estoque_maximo',
          'temperatura_minima',
          'temperatura_maxima',
          'umidade_minima',
          'umidade_maxima',
          'qtde_dias_vender_antes_vencimento'
      ])

      produtoMeta.merge(data)
    
      await produtoMeta.save()
    
      return produtoMeta
    }

    async index () {
      const produtoMeta = ProdutoMeta.all()
      return produtoMeta
    }

    async show ({ params }) {
      const produtoMeta = await ProdutoMeta.query()
      .where('produto_barcode',params.id)
      .fetch()
      console.log(produtoMeta)
      return produtoMeta
  }

    async destroy ({ params, auth, response }) {
      const produtoMeta = await ProdutoMeta.findOrFail(params.id)
      await produtoMeta.delete()
  }
}

module.exports = ProdutoMetaController
