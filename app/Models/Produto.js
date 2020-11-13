'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    //Um produto pode ter muitos produtos unidade 1-N
    produtos_unidade () {
        return this.hasMany('App/Models/ProdutoUnidade')
    }
    //Um produto tem uma linha da tabela meta e uma linha da tabela meta tem um produto 1-1
    produto_metas(){
        return this.hasOne('App/Models/ProdutoMeta')
    }
}

module.exports = Produto
