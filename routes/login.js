const express = require('express');
const LoginController = require('../controllers/loginController');


const router = express.Router();

  router.get('/', LoginController.login);
  router.get('/home', LoginController.home);
  router.get('/cadastrar', LoginController.cadastrar);
  router.get('/sair', LoginController.sair);
  
  
  router.post('/login', LoginController.login_post);
  router.post('/newUsuarioSave',LoginController.newUsuarioSave)
     
  module.exports = router;


  
