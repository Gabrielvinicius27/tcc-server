'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    //Um produto pode ter muitos produtos unidade 1-N
    produtos_unidade () {
        return this.hasMany('App/Models/ProdutoUnidade')
    }
}

module.exports = Produto
