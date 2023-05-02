const router = require('express').Router();

const ClienteController = require('../controllers/ClienteController');

router.get('/allClientes', ClienteController.allClientes);

router.get('/cadastrar', ClienteController.cadastrar);

router.post('/novo', ClienteController.NovoClienteSave);

router.get('/edit/:id', ClienteController.editarCliente);

router.post('/edit', ClienteController.updateCliente);

router.post('/remover', ClienteController.removeCliente);

module.exports = router;

