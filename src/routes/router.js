const express = require('express');
const router = express.Router();
const controller = require('../controllers/controlador');

// Aquí van las RUTAS de las vistas


router.get('/inicio', (req,res) => {
    res.render('usuarios/inicio');
})


router.get('/adm_pedidos', (req,res) => {
    res.render('adm_pedidos', {layout: 'admin'});
});

router.get('/carrito', (req,res) => {
    res.render('usuarios/carrito');
})



// LOGIN
router.get('/login', (req,res) => {
    res.render('usuarios/login', {layout: 'login-layout'});
});


// Crear registro de usuarios
router.post('/login', controller.crear_perfil);




// Rutas PERFIL

// Listar perfil view usuarios
router.get('/perfil', controller.listar_perfil);
router.get('/adm_users', controller.list_perfil);







// Rutas HAMBURGUESAS
router.get('/hg', controller.listar_hg); // Lista a la vista de los usuarios
router.get('/crear_hg', controller.listar_adm_hg); 

router.post('/adm_hg', controller.crear_hg)


// Eliminar hg
router.get('/delete_hg/:id_hg', controller.eliminar_hg); 






// Rutas Sandwich
router.get('/sandwich', controller.listar_sd);
router.get('/crear_sd', controller.listar_adm_sd);

router.post('/adm_sd', controller.crear_sd);

// Eliminar hg
router.get('/delete_sd/:id_sandwich', controller.eliminar_sd); 






// Rutas Jugos
router.get('/jugos', controller.listar_jugos);
router.get('/adm_jugos', controller.listar_adm_jugos);
// Crear
router.get('/adm_jugos', (req,res) => {
    res.render('adm_jugos', {layout: 'admin'});
})
router.post('/adm_jugos', controller.crear_jugos);







// Ruta Gaseosas
router.get('/gaseosas', controller.listar_gaseosas);
router.get('/adm_gaseosas', controller.listar_adm_gaseosas);
// Crear
router.get('/adm_gaseosas', (req,res) =>{
    res.render('adm_gaseosas', {layout: 'admin'});
});
router.post('/adm_gaseosas', controller.crear_gaseosas);






// Ruta Adicionales
router.get('/adicionales', controller.listar_adicionales);
router.get('/adm_adicionales', controller.listar_adm_adicionales);
// Crear
router.get('/adm_adicionales', (req,res) => {
    res.render('adm_adicionales', {layout: 'admin'});
});
router.post('/adm_adicionales', controller.crear_adicionales);






// Ruta Ensaladas
router.get('/ensaladas', controller.listar_ensaladas);
router.get('/adm_ensaladas', controller.listar_adm_ensaladas);
// Crear
router.get('/adm_ensaladas', (req,res) => {
    res.render('adm_ensaladas', {layout: 'admin'});
});

router.post('/adm_ensaladas', controller.crear_ensaladas);



module.exports = router;


