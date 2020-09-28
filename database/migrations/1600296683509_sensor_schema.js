'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SensorSchema extends Schema {
  up () {
    this.create('sensors', (table) => {
      table.increments()
      table
        .integer('estoque_id')
        .unsigned()
        .references('id')
        .inTable('estoques')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('estoque_nome')
      table.string('nome').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('sensors')
  }
}

module.exports = SensorSchema
