const express = require('express');
const router = express.Router();

const controller = require('../controllers/tipos.controller');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.put('/actualizar/:id', controller.actualizar);
router.get('/obtenerTipo/:id', controller.obtenerTipo);

router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;
