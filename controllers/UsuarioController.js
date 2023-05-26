const Usuario = require('../models/Usuario')

module.exports = class UsuarioController {

  static cadastrar(req, res) {
    res.render('usuarios/cadastrar')
  }

  
  static async newUsuarioSave(req, res) {
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
    }

    await Usuario.create(usuario)
      .then(() => {
        // this.allUsuario()//carregar todos os Usuario
      }).catch((error) => {
        console.log(error)
      })
    //redirecionar para a lista de usuarios
    res.redirect('/home')

  }
  static async allUsuarios(req, res) {
    const usuarios = await Usuario.findAll({ raw: true })
    res.render('usuarios/listarusuarios', { usuarios })
  }

  static async updateUsuario(req, res) {
    const id = req.params.id
    const usuario = await Usuario.findOne({ where: { id: id }, raw: true })
    res.render('usuarios/edit',{usuario})

  }

  //update Usuario
  static async updateUsuarioSave(req, res) {
    const id = req.body.id
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password
    }
    await Usuario.update(usuario, { where: { id: id } })
      .then(res.redirect('/usuarios/allUsuarios'))
      .catch((err) => {
        console.log(err)
      })
  }

  static async removeUsuario(req, res) {
    const id = req.body.id
    await Usuario.destroy({ where: { id: id } })
      .then(res.redirect('/usuarios/allUsuarios'))
      .catch((err) => {
        console.log(err)
      })
  }


  static async validarUsuario(email, senha ,req, res){

    var connection = db();
    
    connection.query("SELECT email from usuarios where email =? and senha=?",[email, senha],
      function(error, result){

        if(error){
          throw error;
        }
        
        if (result[0] != undefined ){
          req.session.autorizado = true;
          req.session.nome = result[0].nome;
          res.render('home', {usuario: req.session.nome});
        }
        else{
          res.redirect('/');
        }

      }
    );
  };





}
