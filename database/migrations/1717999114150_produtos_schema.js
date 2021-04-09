'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosSchema extends Schema {
  up () {
    this.alter('produtos', (table)=>  {
      table.dropColumn('nome')
    })
    this.table('produtos', (table) => {
      table.string("nome")// alter table
    })
  }

  down () {
    this.table('produtos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProdutosSchema
