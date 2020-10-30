'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusProdutoSchema extends Schema {
  up () {
    this.create('status_produtos', (table) => {
      table.increments()
      table
      .integer('produto_unidade_id').notNullable()
      .unsigned()
      .references('id')
      .inTable('produtos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('estoque_id').notNullable()
      .unsigned()
      .references('id')
      .inTable('estoques')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('value_code').notNullable()
      table.string('status').notNullable()
      table.string('local')
      table.timestamps()
    })
  }

  down () {
    this.drop('status_produtos')
  }
}

module.exports = StatusProdutoSchema
