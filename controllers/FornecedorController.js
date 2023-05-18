const Fornecedor = require('../models/Fornecedor');

module.exports = class FornecedorController {

  static async allFornecedores(req, res) {
    const fornecedores = await Fornecedor.findAll({ raw: true })
    res.render('fornecedores/allFornecedores', { fornecedores })
  }

  static async NovoFornecedor(req, res) {
    res.render('fornecedores/cadastrar');
  };

  static async NovoFornecedorSave(req, res) {
      const fornecedor = {
          nome: req.body.nome,
          email: req.body.email,
          telefone: req.body.telefone
      }
    
      await Fornecedor.create(fornecedor)
      .then(() => {
        console.log('Fornecedor criado com sucesso!');
        res.redirect('/fornecedores/allFornecedores');
      })
      .catch(err => console.log(err));
  };
  
  static async editarFornecedor(req, res) {
    const id = req.params.id;
    const fornecedor = await Fornecedor.findOne({ where: { idFornecedor: id }, raw: true })
    res.render('fornecedores/edit', { fornecedor })

  }
  static async updateProdutoSave(req, res) {
    const id = req.body.id;
    const fornecedor = { 
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone
    }

    await Fornecedor.update(fornecedor, { where: { idFornecedor:id } })
      .then(res.redirect('/fornecedores/allFornecedores'))
      .catch((err) => {
        console.log(err)
      })
    }

  static async removeFornecedor(req, res) {
    const id = req.body.id
    await Fornecedor.destroy({ where: { idFornecedor: id } })
      .then(res.redirect('/fornecedores/allFornecedores'))
      .catch((err) => {
        console.log(err)
      })
  }
};
