const express = require('express');
const router = express.Router();

const fornecedorController = require('../controllers/fornecedorController');

router.get('/fornecedores', fornecedorController.getIndex);
router.get('/novofornecedor', fornecedorController.getNovoFornecedor);
router.post('/novofornecedor', fornecedorController.postNovoFornecedor);
router.get('/editarfornecedor/:fornecedorId', fornecedorController.getEditarFornecedor);
router.post('/editarfornecedor', fornecedorController.postEditarFornecedor);
router.post('/removerfornecedor', fornecedorController.postRemoverFornecedor);

module.exports = router;
