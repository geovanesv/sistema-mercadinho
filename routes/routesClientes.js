const express = require('express');
const clienteController = require('../controllers/ClienteController');

const router = express.Router();

router.get('/clientes', clienteController.getIndex);

router.get('/novocliente', clienteController.getNovoCliente);

router.post('/novocliente', clienteController.postNovoCliente);

router.get('/editarcliente/:clienteId', clienteController.getEditarCliente);

router.post('/editarcliente', clienteController.postEditarCliente);

router.post('/removercliente', clienteController.postRemoverCliente);

module.exports = router;

