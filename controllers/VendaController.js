const Venda = require('../models/Venda')
const Produto = require('../models/Produto')
const Cliente = require('../models/Cliente')
const Fornecedor = require('../models/Fornecedor')

module.exports = class VendaController {
  static async cadastrar(req, res) {
    const produtos = await Produto.findAll({ raw: true })
    const clientes = await Cliente.findAll({ raw: true })
    const fornecedores = await Fornecedor.findAll({ raw: true })
    res.render('vendas/realizarVenda', { produtos, clientes, fornecedores })
  }

  static async newVendaSave(req, res) {
    const venda = {
      data: new Date(),
      valor_total: 0
    }

    const produtos = req.body.produtos || []

    let valor_total = 0

    for (let i = 0; i < produtos.length; i++) {
      const produto_id = produtos[i]
      const produto = await Produto.findOne({ where: { id: produto_id }, raw: true })

      if (produto) {
        valor_total += produto.preco
      }
    }

    venda.valor_total = valor_total

    await Venda.create(venda)
      .then(async (venda_criada) => {
        const venda_id = venda_criada.id
        for (let i = 0; i < produtos.length; i++) {
          const produto_id = produtos[i]
          await venda_criada.addProduto(produto_id)
        }
        res.redirect('/vendas/listarVendas')
      })
      .catch((error) => {
        console.log(error)
        res.redirect('/vendas/realizarVenda')
      })
  }

  static async listarVendas(req, res) {
    const vendas = await Venda.findAll({ raw: true })
    const produtos = await Produto.findAll({ raw: true })
    const clientes = await Cliente.findAll({ raw: true })
    const fornecedores = await Fornecedor.findAll({ raw: true })
    res.render('vendas/listarVendas', {vendas, produtos, clientes, fornecedores })
  }

  static async detalharVenda(req, res) {
    const venda_id = req.params.id

    const venda = await Venda.findOne({
      where: { id: venda_id },
      include: { model: Produto }
    })

    
  }

  static async editarVenda(req, res) {
    const id = req.params.id;
    const venda = await Venda.findOne({ where: { id: id } });
  
    if (!venda) {
      return res.status(404).send('Venda não encontrada');
    }
  
    const produtos = await Produto.findAll({ raw: true });
    res.render('editarVendas', { venda, produtos });
  }

  static async atualizarVenda(req, res) {
    const id = req.params.id;
    const venda = await Venda.findOne({ where: { id: id } });
  
    if (!venda) {
      return res.status(404).send('Venda não encontrada');
    }
  
    const { produtoId, quantidade } = req.body;
  
    await venda.update({ produtoId, quantidade });
  
    res.redirect('/listarVendas');
  }
  
  

  static async removerVenda(req, res) {
    const venda_id = req.body.id

    await Venda.destroy({ where: { id: venda_id } })
      .then(() => {
        res.redirect('/listarvendas')
      })
      .catch((err) => {
        console.log(err)
        res.redirect('/listarvendas')
      })
  }
}
