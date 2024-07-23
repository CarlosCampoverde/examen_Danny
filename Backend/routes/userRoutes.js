const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.get('/usuarios/ver', userController.getAllUsuarios);
router.get('/usuarios/ver/:id', userController.getUsuarioById);
router.post('/usuarios/crear', userController.createUsuario);
router.put('/usuarios/editar/:id', userController.updateUsuario);
router.delete('/usuarios/eliminar/:id', userController.deleteUsuario);

module.exports = router;
