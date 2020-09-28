'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoUnidadeSchema extends Schema {
  up () {
    this.create('produto_unidades', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('produto_unidades')
  }
}

module.exports = ProdutoUnidadeSchema
