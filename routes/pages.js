const router = require('express').Router();

const ProdutoController = require('../controllers/ProdutoController')


router.get('/', (req, res) => {
    res.render('index');
});


router.get('/cadastrar',ProdutoController.cadastrar)

router.get('/allProdutos',ProdutoController.allProdutos)

router.get('/edit/:id', ProdutoController.updateProduto);

module.exports = router;