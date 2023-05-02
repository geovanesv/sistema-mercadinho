const router = require('express').Router();
const VendaController = require('../controllers/VendaController');
const vendasController = require('../controllers/VendaController');

router.get('/realizarvenda', vendasController.cadastrar);
router.post('/realizarvenda', vendasController.newVendaSave);

router.get('/listarvendas', vendasController.listarVendas);

// Rota para exibir a página de edição de venda
router.get('/editarVendas/:id', VendaController.editarVenda);

// Rota para atualizar uma venda existente
router.put('/editarVendas/:id', VendaController.atualizarVenda);

router.post('/remove',VendaController.removerVenda)

module.exports = router;
