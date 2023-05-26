let express = require('express');
let router = express.Router();
let Usuario= require('../models/Usuario');



module.exports = class LoginController {
    static login(req,res){
        res.render('index');
    }
    
    static sair(req, res){
        req.session.destroy(function(err){
            res.render('index');
        });
    }
        
    static async login_post(req, res, next) {
        const { nome, password } = req.body;
        console.log(`nome: ${nome}, password: ${password}`);

        const usuario = await Usuario.findOne({ where: { nome, password } });

        if (!usuario) {
            console.log("Usuário não encontrado");
            res.redirect('index'); // Redirecionar para a página de login em caso de falha de autenticação
        } else {
            console.log("Usuário encontrado");
            req.session.usuario = usuario; // Salvar o usuário na sessão
            res.redirect('/home'); // Redirecionar para a página home em caso de sucesso de autenticação
        }
    }
        
    static async home(req, res, next) {
        if (req.session.usuario) {
            const usuario = req.session.usuario;
            res.render('home', { usuario });
        } else {
            res.redirect('/'); // Redirecionar para a página de login se o usuário não estiver autenticado
        }
    }
        
    static cadastrar(req,res){
        res.render('cadastrar');
      
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
        res.redirect('/')
    
      }
        
        
        
}