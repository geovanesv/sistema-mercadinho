
const Cliente = require('../models/Cliente');

module.exports = class ClienteController {

  
  static async allClientes(req, res) {
    const clientes = await Cliente.findAll({ raw: true })
    res.render('clientes/allClientes', { clientes })
  }
  
  static cadastrar(req, res){
    res.render('clientes/cadastrar');
  };
  
  static NovoClienteSave(req, res){
    const cliente = {
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone
    }
    Cliente.create(cliente)
      .then(() => {
      })
      .catch(err => console.log(err));
      res.redirect('/clientes/allClientes')
  };
  
  static async editarCliente(req, res) {
    const id = req.params.id;
    const cliente = await Cliente.findOne({ where: { id: id }, raw: true })
    res.render('clientes/edit', { cliente })
  }
  
  static updateCliente(req, res){
    const clienteId = req.body.clienteId;
    const cliente = {
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone
    }
    Cliente.update(cliente,{where: {id: clienteId}})
      .then(() => {
        console.log('Cliente atualizado com sucesso!');
        res.redirect('/clientes/allClientes');
      })
  };
  
  static async removeCliente(req, res) {
    const clienteId = req.body.clienteId;
    await Cliente.destroy({ where: { id: clienteId } })
      .then(res.redirect('/clientes/allClientes'))
      .catch((err) => {
        console.log(err)
      })
  }
}
