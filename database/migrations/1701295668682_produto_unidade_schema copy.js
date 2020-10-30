'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoUnidadeSchema extends Schema {
  up () {
    this.drop('produto_unidades')
    this.create('produto_unidades', (table) => {
      table.increments()
      table
      .integer('produto_id')
      .unsigned()
      .references('id')
      .inTable('produtos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('produto_barcode').notNullable()
      table.string('value_code').notNullable()
      table.string('numero_lote')
      table.date('data_validade').notNullable()
      table.string('descricao')
      table.timestamps()
      
    })
  }

  down () {
    this.drop('produto_unidades')
  }
}

module.exports = ProdutoUnidadeSchema
