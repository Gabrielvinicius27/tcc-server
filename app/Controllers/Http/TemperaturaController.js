'use strict'

const Temperatura = use("App/Models/Temperatura")
class TemperaturaController {
    async create({request, auth}){
        const data =request.all()
        const temperatura =await Temperatura.create(data)
        return temperatura
    }
    async index () {
        const temperaturas = Temperatura.all()
        return temperaturas
    }
}

module.exports = TemperaturaController
