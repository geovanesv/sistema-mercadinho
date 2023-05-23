const Produto = require('../models/Produto')
const Fornecedor = require('../models/Fornecedor')

module.exports = class UserController {

  static async cadastrar(req, res) {
    const fornecedores = await Fornecedor.findAll({ raw: true });
    res.render('produtos/cadastrar',{fornecedores})
  }
  
  static saidaProduto(req, res) {
    res.render('produtos/saidaProduto')
  }

  
  static async newProdutoSave(req, res) {
    const produto = {
      nome: req.body.nome,
      categoria: req.body.categoria,
      idFornecedor: req.body.id,
      preco: req.body.preco, 
      qt_produto: req.body.qt_produto
    }

    await Produto.create(produto)
      .then(() => {
        // this.allProdutos()//carregar todos os PRODUTOS
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/produtos/allProdutos')

  }
  static async allProdutos(req, res) {
    const produtos = await Produto.findAll({ raw: true })
    const fornecedores = await Fornecedor.findAll({ raw: true })
    res.render('produtos/listarprodutos', { produtos, fornecedores })
  }

  static async updateProduto(req, res) {
    const id = req.params.id
    const produto = await Produto.findOne({ where: { idProduto: id }, raw: true })
    const fornecedores = await Fornecedor.findAll({ raw: true })
    res.render('produtos/edit',{produto, fornecedores})

  }

  //update produto
  static async updateProdutoSave(req, res) {
    const id = req.body.id
    const produto = {
      nome: req.body.nome,
      categoria: req.body.categoria,
      preco: req.body.preco
    }
    await Produto.update(produto, { where: { idProduto: id } })
      .then(res.redirect('/produtos/allProdutos'))
      .catch((err) => {
        console.log(err)
      })
  }

  static async removeProduto(req, res) {
    const id = req.body.id
    await Produto.destroy({ where: { idProduto: id } })
      .then(res.redirect('/produtos/allProdutos'))
      .catch((err) => {
        console.log(err)
      })
  }



}
