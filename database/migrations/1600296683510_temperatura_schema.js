'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TemperaturaSchema extends Schema {
  up () {
    this.create('temperaturas', (table) => {
      table.increments()
      table
        .integer('sensor_id')
        .unsigned()
        .references('id')
        .inTable('sensors')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('sensor_nome')
      table.float('temperatura_celcius').notNullable()
      table.float('temperatura_fahrenheit').notNullable()
      table.float('umidade').notNullable()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('temperaturas')
  }
}

module.exports = TemperaturaSchema
