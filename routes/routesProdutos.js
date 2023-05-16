const router = require('express').Router();

const ProdutoController = require('../controllers/ProdutoController')

router.post('/add', ProdutoController.newProdutoSave);
router.post('/edit',ProdutoController.updateProdutoSave)
router.post('/remove',ProdutoController.removeProduto)
//router.post('/atualizarEstoque',ProdutoController.atualizarEstoque)


router.get('/saidaProduto',ProdutoController.saidaProduto)
router.get('/cadastrar',ProdutoController.cadastrar)
router.get('/allProdutos',ProdutoController.allProdutos)
router.get('/edit/:id', ProdutoController.updateProduto);

module.exports = router;