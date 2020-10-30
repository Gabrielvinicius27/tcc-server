'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProdutoUnidade extends Model {
    //Cada produto unidade pertence à um produto N-1
    produto(){
        return this.belongsTo('App/Models/Produto')
    }
    estoque(){
        return this.belongsTo('App/Models/Estoque')
    }
    //Um produto unidade pode ter muitos status 1-N
    statusProduto () {
        return this.hasMany('App/Models/StatusProduto')
    }
}

module.exports = ProdutoUnidade
