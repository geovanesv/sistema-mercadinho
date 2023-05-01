const express = require('express');
const router = express.Router();
const vendasController = require('../controllers/vendasController');

router.get('/realizarvenda', vendasController.getRealizarVenda);
router.post('/realizarvenda', vendasController.postRealizarVenda);
router.get('/listarvendas', vendasController.getListarVendas);

// Rota para exibir a página de edição de venda
router.get('/vendas/editarVendas/:id', VendaController.editarVenda);

// Rota para atualizar uma venda existente
router.put('/updateVendas/:id', VendaController.atualizarVenda);

module.exports = router;
