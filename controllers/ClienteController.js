const Cliente = require('../models/Cliente');

exports.getIndex = (req, res, next) => {
  Cliente.findAll()
    .then(clientes => {
      res.render('clientes/index', {
        clientes: clientes,
        pageTitle: 'Clientes',
        path: '/clientes'
      });
    })
    .catch(err => console.log(err));
};

exports.getNovoCliente = (req, res, next) => {
  res.render('clientes/novo', {
    pageTitle: 'Novo Cliente',
    path: '/clientes/novo'
  });
};

exports.postNovoCliente = (req, res, next) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  Cliente.create({
    nome: nome,
    email: email,
    telefone: telefone
  })
    .then(result => {
      console.log('Cliente criado com sucesso!');
      res.redirect('/clientes');
    })
    .catch(err => console.log(err));
};

exports.getEditarCliente = (req, res, next) => {
  const clienteId = req.params.clienteId;
  Cliente.findByPk(clienteId)
    .then(cliente => {
      res.render('clientes/editar', {
        cliente: cliente,
        pageTitle: 'Editar Cliente',
        path: '/clientes/editar'
      });
    })
    .catch(err => console.log(err));
};

exports.postEditarCliente = (req, res, next) => {
  const clienteId = req.body.clienteId;
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  Cliente.findByPk(clienteId)
    .then(cliente => {
      cliente.nome = nome;
      cliente.email = email;
      cliente.telefone = telefone;
      return cliente.save();
    })
    .then(result => {
      console.log('Cliente atualizado com sucesso!');
      res.redirect('/clientes');
    })
    .catch(err => console.log(err));
};

exports.postRemoverCliente = (req, res, next) => {
  const clienteId = req.body.clienteId;
  Cliente.findByPk(clienteId)
    .then(cliente => {
      return cliente.destroy();
    })
    .then(result => {
      console.log('Cliente removido com sucesso!');
      res.redirect('/clientes');
    })
    .catch(err => console.log(err));
};
