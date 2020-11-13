'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoMetaSchema extends Schema {
  up () {
    this.create('produto_metas', (table) => {
      table.increments()
      table
      .integer('produto_id')
      .unsigned()
      .references('id')
      .inTable('produtos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('produto_barcode').notNullable().unique()
      table.float('estoque_minimo')
      table.float('estoque_maximo')
      table.float('temperatura_minima')
      table.float('temperatura_maxima')
      table.float('umidade_minima')
      table.float('umidade_maxima')
      table.float('qtde_dias_vender_antes_vencimento')
      table.timestamps()
    })
  }

  down () {
    this.drop('produto_metas')
  }
}

module.exports = ProdutoMetaSchema
