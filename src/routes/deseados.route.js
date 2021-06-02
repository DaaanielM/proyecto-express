const express = require('express');
const router = express.Router();
const controller = require('../controllers/deseados.controller');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.get('/obtenerDeseado/:id', controller.obtenerDeseado);

router.delete('/eliminar/:idUsuario/:idProducto', controller.eliminar);

module.exports = router;
