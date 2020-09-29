'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.drop('produtos')
    this.create('produtos', (table) => {
      table.increments()
      table.string("barcode").notNullable().unique()
      table.string("nome").notNullable().unique()
      table.string("marca").notNullable()
      table.string("descricao").notNullable()
      table.string("embalagem").notNullable()
      table.float("conteudo").notNullable()
      table.string("unidade_de_medida").notNullable()
      table.float("preco_sugerido").notNullable()
      table.string("moeda").notNullable()
      table.string("fornecedor")
      table.string("departamento")
      table.string("categoria")
      table.string("subcategoria")
      table.string("segmento")
      table.string("subsegmento")
      table.string("image_url").notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
