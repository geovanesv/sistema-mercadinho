const Fornecedor = require('../models/Fornecedor');

module.exports = class FornecedorController {

  static getIndex(req, res, next) {
    Fornecedor.findAll()
      .then(fornecedores => {
        res.render('fornecedores/allFornecedores', {
          fornecedores: fornecedores,
          pageTitle: 'Fornecedores',
          path: '/fornecedores'
        });
      })
      .catch(err => console.log(err));
  };

  static getNovoFornecedor(req, res, next) {
    res.render('fornecedores/novo', {
      pageTitle: 'Novo Fornecedor',
      path: '/fornecedores/novo'
    });
  };

  static postNovoFornecedor(req, res, next) {
      const fornecedor = {
          nome: req.body.nome,
          email: req.body.email,
          telefone: req.body.telefone
      }
    
      Fornecedor.create(fornecedor)
      .then(result => {
        console.log('Fornecedor criado com sucesso!');
        res.redirect('/fornecedores');
      })
      .catch(err => console.log(err));
  };

  static getEditarFornecedor(req, res, next) {
    const fornecedorId = req.params.fornecedorId;
    Fornecedor.findByPk(fornecedorId)
      .then(fornecedor => {
        res.render('fornecedores/editar', {
          fornecedor: fornecedor,
          pageTitle: 'Editar Fornecedor',
          path: '/fornecedores/editar'
        });
      })
      .catch(err => console.log(err));
  };

  static postEditarFornecedor(req, res, next) {
    const fornecedorId = req.body.fornecedorId;
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    Fornecedor.findByPk(fornecedorId)
      .then(fornecedor => {
        fornecedor.nome = nome;
        fornecedor.email = email;
        fornecedor.telefone = telefone;
        return fornecedor.save();
      })
      .then(result => {
        console.log('Fornecedor atualizado com sucesso!');
        res.redirect('/fornecedores');
      })
      .catch(err => console.log(err));
  };

  static postRemoverFornecedor(req, res, next) {
    const fornecedorId = req.body.fornecedorId;
    Fornecedor.findByPk(fornecedorId)
      .then(fornecedor => {
        return fornecedor.destroy();
      })
      .then(result => {
        console.log('Fornecedor removido com sucesso!');
        res.redirect('/fornecedores');
      })
      .catch(err => console.log(err));
  };
};
