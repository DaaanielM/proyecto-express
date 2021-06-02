const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactos.controller');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.put('/actualizar/:id', controller.actualizar);
router.get('/obtenerContacto/:id', controller.obtenerContacto);
router.delete('/eliminar/:id', controller.eliminar);


module.exports = router;
