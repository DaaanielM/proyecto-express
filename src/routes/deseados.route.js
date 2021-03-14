const express = require('express');
const router = express.Router();
const controller = require('../controllers/deseados.controller');

router.get('/listar/:id', controller.listar);
router.post('/crear', controller.crear);
router.delete('/eliminar/:idUsuario/:idProducto', controller.eliminar);

module.exports = router;
