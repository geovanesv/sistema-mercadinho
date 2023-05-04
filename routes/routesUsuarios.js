const router = require('express').Router();

const UsuarioController = require('../controllers/UsuarioController')

router.post('/add', UsuarioController.newUsuarioSave);
router.post('/edit',UsuarioController.updateUsuarioSave)
router.post('/remove',UsuarioController.removeUsuario)

router.get('/cadastrar',UsuarioController.cadastrar)
router.get('/allUsuarios',UsuarioController.allUsuarios)
router.get('/edit/:id', UsuarioController.updateUsuario);

module.exports = router;