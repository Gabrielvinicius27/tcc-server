'use strict'

const Estoque = use("App/Models/Estoque")
class EstoqueController {

    async store({request,response}) {
        const data = request.only([
            'nome',
            'tipo'
        ])
        const estoque = await Estoque.create({...data})
        return estoque
    }

    async update ({ params, request, response }) {
      
        const estoque = await Estoque.findBy('nome',decodeURI(params.id))
      
        const data = request.only([
            'nome',
            'tipo'
        ])
      
        estoque.merge(data)
      
        await estoque.save()
      
        return estoque
    }

    async index () {
        const estoques = Estoque.query()
        .with('sensors.temperaturas')
        .with('produtos_unidade')
        .fetch()
        return estoques
    }

    async show ({ params }) {
        const estoque = await Estoque.query()
        .whereRaw(`nome = '${decodeURI(params.id)}'`)
        .fetch()
        return estoque
    }

    async destroy ({ params, auth, response }) {
        const estoque = await Estoque.findOrFail(params.id)
      
        if (auth.user.id == '') {
          return response.status(401).send({ error: 'Not authorized' })
        }
      
        await estoque.delete()
    }

}

module.exports = EstoqueController
