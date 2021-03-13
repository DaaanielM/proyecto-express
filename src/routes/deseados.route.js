const express = require('express');
const router = express.Router();
const controller = require('../controllers/deseados.controller');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);

module.exports = router;