const router = require('express').Router();
const FornecedorController =  require('../controllers/FornecedorController')

router.get('/', FornecedorController.allFornecedores);
router.get('/novo', FornecedorController.NovoFornecedor);
router.post('/novo', FornecedorController.NovoFornecedorSave);
router.get('/editar/:fornecedorId', FornecedorController.editarFornecedor);
router.post('/editar', FornecedorController.updateProdutoSave);
router.post('/remover', FornecedorController.removeFornecedor);

module.exports = router;
