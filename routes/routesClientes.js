const router = require('express').Router();

const ClienteController = require('../controllers/ClienteController');

router.get('/', ClienteController.allClientes);

router.get('/novo', ClienteController.NovoCliente);

router.post('/novo', ClienteController.NovoClienteSave);

router.get('/editar/:clienteId', ClienteController.editarCliente);

router.post('/editar', ClienteController.updateCliente);

router.post('/remover', ClienteController.removeCliente);

module.exports = router;

