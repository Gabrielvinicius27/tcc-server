'use strict'

const Schema = use('Schema')

class EstoqueSchema extends Schema {
  up () {
    this.create('estoques', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('tipo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estoques')
  }
}

module.exports = EstoqueSchema
