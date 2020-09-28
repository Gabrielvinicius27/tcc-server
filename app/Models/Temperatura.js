'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Temperatura extends Model {
    //Cada temperatura pertence à um sensor N-1
    sensor(){
        return this.belongsTo('App/Models/Sensor')
    }
}

module.exports = Temperatura
