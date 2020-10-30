'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Database = use('Database')

class Estoque extends Model {
    //Um estoque pode ter muitos sensores 
    sensors () {
        return this.hasMany('App/Models/Sensor')
    }
    produtos_unidade() {
        return this.hasMany('App/Models/ProdutoUnidade')
    }
    statusProduto() {
        return this.hasMany('App/Models/StatusProduto')
    }

}

module.exports = Estoque
