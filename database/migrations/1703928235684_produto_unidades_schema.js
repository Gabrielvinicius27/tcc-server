'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoUnidadesSchema extends Schema {
  up () {
    this.table('produto_unidades', (table) => {
    // alter table
      table
      .integer('estoque_id').notNullable()
      .unsigned()
      .references('id')
      .inTable('estoques')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      })
  }

  down () {
    this.table('produto_unidades', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProdutoUnidadesSchema
