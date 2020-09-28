'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sensor extends Model {
    //Cada sensor pertence à um estoque N-1
    estoque(){
        return this.belongsTo('App/Models/Estoque')
    }
    //Um sensor pode conter muitas temperaturas 1-N
    temperaturas () {
        return this.hasMany('App/Models/Temperatura')
    }
}

module.exports = Sensor
