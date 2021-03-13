const router = require('express').Router();

router.use('/categorias', require('../routes/categorias.route'));
router.use('/contactos', require('../routes/contactos.route'));
router.use('/deseados', require('../routes/deseados.route'));

router.use('/direcciones', require('../routes/direcciones.route'));
router.use('/ofertas', require('../routes/ofertas.route'));
router.use('/pedidos', require('../routes/pedidos.route'));
router.use('/productos', require('../routes/productos.route'));
router.use('/suscripciones', require('../routes/suscripciones.route'));
router.use('/tipos', require('../routes/tipos.route'));
router.use('/usuarios', require('../routes/usuarios.route'));

module.exports = router;