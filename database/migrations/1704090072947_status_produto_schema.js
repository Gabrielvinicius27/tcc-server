'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusProdutoSchema extends Schema {
  up () {
    this.alter('status_produtos',(table)=>{
      table.dropColumn('produto_unidade_id')
    })
    this.table('status_produtos', (table) => {
      // alter table
      table
      .integer('produto_unidade_id').notNullable()
      .unsigned()
      .references('id')
      .inTable('produto_unidades')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    })
  }

  down () {
    this.table('status_produtos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StatusProdutoSchema
