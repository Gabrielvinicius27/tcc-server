'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstoqueSchema extends Schema {
  up () {
    this.create('estoques', (table) => {
      table.increments()
      table.string('nome').notNullable().unique()
      table.string('tipo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estoques')
  }
}

module.exports = EstoqueSchema
