const express = require('express');
const controller = require('../controllers/login');


const router = express.Router();

  router.get('/', controller.get);
  router.get('/home', controller.home);

  // router.post('/', controller.post);

  router.get('/newUsuario',controller.cadastrar)
     
  module.exports = router;


  
