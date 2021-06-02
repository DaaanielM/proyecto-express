const express = require('express');
const router = express.Router();

const controller = require('../controllers/suscripciones.controller');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.put('/actualizar/:id', controller.actualizar);
router.get('/obtenerSuscripciones/:id', controller.obtenerSuscripciones);
router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;
