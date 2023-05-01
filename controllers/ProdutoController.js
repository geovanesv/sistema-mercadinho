const Produto = require('../models/Produto')

module.exports = class UserController {

  static cadastrar(req, res) {
    res.render('produtos/cadastrar')
  }

  
  static async newProdutoSave(req, res) {
    const produto = {
      nome: req.body.nome,
      categoria: req.body.categoria,
      preco: req.body.preco,
    }

    await Produto.create(produto)
      .then(() => {
        // this.allProdutos()//carregar todos os PRODUTOS
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/allProdutos')

  }
  static async allProdutos(req, res) {
    const produtos = await Produto.findAll({ raw: true })
    res.render('produtos/listarprodutos', { produtos })
  }

  static async updateProduto(req, res) {
    const id = req.params.id
    const produto = await Produto.findOne({ where: { id: id }, raw: true })
    res.render('produtos/edit', { produto })

  }

  //update produto
  static async updateProdutoSave(req, res) {
    const id = req.body.id
    const produto = {
      nome: req.body.nome,
      categoria: req.body.categoria,
      preco: req.body.preco
    }
    await Produto.update(produto, { where: { id: id } })
      .then(res.redirect('/allProdutos'))
      .catch((err) => {
        console.log(err)
      })
  }

  static async removeProduto(req, res) {
    const id = req.body.id
    await Produto.destroy({ where: { id: id } })
      .then(res.redirect('/allProdutos'))
      .catch((err) => {
        console.log(err)
      })
  }



}
