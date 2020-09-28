'use strict'

const Sensor = use("App/Models/Sensor")
const Estoque = use("App/Models/Estoque")
class SensorController {

    async store({request,response}) {
        const data = request.only([
            'estoque_id',
            'nome'
        ])
        const estoque_nome = await Estoque.findOrFail(data["estoque_id"])
        const sensor = await Sensor.create({...data, estoque_nome:estoque_nome.nome})
        return sensor
    }

    async update ({ params, request, response }) {
        const sensor = await Sensor.findOrFail(params.id)
      
        const data = request.only([
            'estoque_id',
            'nome'
        ])
      
        sensor.merge(data)
      
        await sensor.save()
      
        return sensor
    }

    async index () {
        const sensors = Sensor.all()
        return sensors
    }

    async show ({ params }) {
        const sensor = await Sensor.findOrFail(params.id)
        return sensor
    }

    async destroy ({ params, auth, response }) {
        const sensor = await Sensor.findOrFail(params.id)
      
        if (auth.user.id == '') {
          return response.status(401).send({ error: 'Not authorized' })
        }
      
        await sensor.delete()
    }
}

module.exports = SensorController
