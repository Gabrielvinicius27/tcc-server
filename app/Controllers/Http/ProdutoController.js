'use strict'

const { findOrFail } = require("../../Models/Sensor")

const Produto = use("App/Models/Produto")
class ProdutoController {

    async store({request,response}) {
        const data = request.only([
          "barcode",
          "nome",
          "marca",
          "descricao",
          "embalagem",
          "conteudo",
          "unidade_de_medida",
          "preco_sugerido",
          "moeda",
          "fornecedor",
          "departamento",
          "categoria",
          "subcategoria",
          "segmento",
          "subsegmento",
          "image_url"
        ])
        const produto = await Produto.create({...data})
        return produto
    }

    async update ({ params, request, response }) {
        const produto = await Produto.findBy('barcode',params.id)
        console.log(produto)
        const data = request.only([
          "barcode",
          "nome",
          "marca",
          "descricao",
          "embalagem",
          "conteudo",
          "unidade_de_medida",
          "preco_sugerido",
          "moeda",
          "fornecedor",
          "departamento",
          "categoria",
          "subcategoria",
          "segmento",
          "subsegmento",
          "image_url"
        ])
        console.log(data)
        produto.merge(data)
      
        await produto.save()
      
        return produto
    }

    async index () {
        const produtos = Produto.all()
        return produtos
    }

    async show ({ params }) {
        const produto = await Produto.query()
        .where('barcode',params.id)
        .with('produto_metas')
        .fetch()
        console.log(produto)
        return produto
    }

    async destroy ({ params, auth, response }) {
        const produto = await Produto.findOrFail(params.id)
      
        if (auth.user.id == '') {
          return response.status(401).send({ error: 'Not authorized' })
        }
      
        await produto.delete()
    }
}

module.exports = ProdutoController
