const express = require('express');
const router = express.Router();

const controller = require('../controllers/productos.controller');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.put('/actualizar/:id', controller.actualizar);
router.delete('/eliminar/:id', controller.eliminar);

//MI APP

router.get('/listar-app', controller.listar);
router.post('/crear-app', controller.crear);
router.put('/actualizar-app/:id', controller.actualizar);
router.delete('/eliminar-app/:id', controller.eliminar);


module.exports = router;