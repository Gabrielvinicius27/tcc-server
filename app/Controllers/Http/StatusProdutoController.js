'use strict'

const Database = use('Database')
const StatusProduto = use('App/Models/StatusProduto')

class StatusProdutoController {

    async store({request,response}) {
        const data = request.only([
          'value_code',
          'status',
          'local'
        ])

        const produto_unidade = await Database.select('id')
        .from('produto_unidades')
        .where('value_code',data['value_code'])

        const estoque = await Database.select('id')
        .from('estoques')
        .where('nome', data['local'])
        
        console.log(produto_unidade[0].id)
        const statusProduto = await StatusProduto
        .create(
            {
                ...data,
                'produto_unidade_id':produto_unidade[0].id,
                'estoque_id':estoque[0].id
            }
        )
        
        return statusProduto
    }

    async index () {
      const statusProduto = StatusProduto.all()
      return statusProduto
    }

    async destroy ({ params, auth, response }) {
      const statusProduto = await StatusProduto.findOrFail(params.id)
      await statusProduto.delete()
  }
}

module.exports = StatusProdutoController
