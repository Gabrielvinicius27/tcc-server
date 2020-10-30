'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StatusProduto extends Model {
    //Cada status é relacionado à um produto unidade
    produtoUnidade(){
       return this.hasMany('App/Models/ProdutoUnidade')
    }
    //Cada status pertence à um produto unidade 
    estoque(){
        return this.belongsTo('App/Models/Estoque')
    }
}

module.exports = StatusProduto