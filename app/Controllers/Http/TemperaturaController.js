'use strict'

const Temperatura = use("App/Models/Temperatura")
const Sensor = use("App/Models/Sensor")
class TemperaturaController {

    async store({request,response}) {
        const data = request.only([
            'sensor_id',
            'temperatura_celcius',
            'temperatura_fahrenheit',
            'umidade',
            'descricao'
        ])
        const sensor_nome = await Sensor.findOrFail(data["sensor_id"])
        const temperatura = await Temperatura.create({...data, sensor_nome:sensor_nome.nome})
        return temperatura
    }

    async update ({ params, request, response }) {
        const temperatura = await Temperatura.findOrFail(params.id)
      
        const data = request.only([
            'sensor_id',
            'temperatura_celcius',
            'temperatura_fahrenheit',
            'umidade',
            'descricao'
        ])
      
        temperatura.merge(data)
      
        await temperatura.save()
      
        return temperatura
    }

    async index () {
        const temperaturas = Temperatura.all()
        return temperaturas
    }

    async show ({ params }) {
        const temperatura = await Temperatura.findOrFail(params.id)
        return temperatura
    }

    async destroy ({ params, auth, response }) {
        const temperatura = await Temperatura.findOrFail(params.id)
      
        if (auth.user.id == '') {
          return response.status(401).send({ error: 'Not authorized' })
        }
      
        await temperatura.delete()
    }
}

module.exports = TemperaturaController
