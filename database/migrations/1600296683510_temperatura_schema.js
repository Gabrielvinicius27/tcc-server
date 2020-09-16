'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TemperaturaSchema extends Schema {
  up () {
    this.create('temperaturas', (table) => {
      table.increments()
      table.string('sensor')
      table.float('temperatura').notNullable()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('temperaturas')
  }
}

module.exports = TemperaturaSchema
