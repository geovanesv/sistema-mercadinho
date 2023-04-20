const router = require('express').Router();

const ProdutoController = require('../controllers/ProdutoController')

router.post('/add', ProdutoController.newProdutoSave);

router.post('/edit',ProdutoController.updateProdutoSave)

router.post('/remove',ProdutoController.removeProduto)

module.exports = router;