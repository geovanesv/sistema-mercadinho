let express = require('express');
let router = express.Router();
let usuarioModel= require('../models/Usuario');

const criptografia = {
    algoritmo : 'aes256',
    segredo : 'chaves',
    tipo: 'hex'
};
let crypto = require('crypto');

let cipher = crypto.createCipher(criptografia.algoritmo, criptografia.segredo);

module.exports = class ClienteController {
    
}


//cipher.update(senha);


module.exports.get = (req, res, next) => {
    res.render('index');
}

module.exports.cadastrar = (req, res, next) => {
    res.render('cadastrar_user');
}

module.exports.post = (req, res, next) => {
    let email = req.body.email;
   // cipher.update(req.body.txtSenha);
    let senha = req.body.senha;
    //cipher.final(criptografia.tipo);
   // console.log(senha)
    
    usuarioModel.validarUsuario (email, senha, req, res);
}

    
