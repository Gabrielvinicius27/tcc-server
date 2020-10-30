'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoUnidadesSchema extends Schema {
  up () {
    this.alter('produto_unidades', (table)=>  {
      table.dropColumn('produto_id')
    })
    this.table('produto_unidades', (table) => {
      // alter table
      table.string('status').notNullable()
      table.string('local').notNullable()
      
      table
      .integer('produto_id').notNullable()
      .unsigned()
      .references('id')
      .inTable('produtos')
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
