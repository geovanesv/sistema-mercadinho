const router = require('express').Router();
const FornecedorController =  require('../controllers/FornecedorController')

router.get('/allFornecedores', FornecedorController.allFornecedores);
router.get('/cadastrar', FornecedorController.NovoFornecedor);
router.get('/edit/:id', FornecedorController.editarFornecedor);


router.post('/cadastrar', FornecedorController.NovoFornecedorSave);
router.post('/edit', FornecedorController.updateProdutoSave);
router.post('/remove', FornecedorController.removeFornecedor);

module.exports = router;
