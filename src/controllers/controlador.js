const { conexion } = require('../database/db');

const controller = {}; // Este objeto es el que vamos a ir cambiando

// Controlador Perfil

controller.listar_perfil = async(req,res) => {
    await conexion.query('SELECT * FROM usuarios', (err, users) => {
        if(err){
            console.log(err);
        }else{
            res.render('usuarios/perfil', {layout: 'index', users: users});
        }
    });
}

controller.list_perfil = async(req,res) => {
    await conexion.query('SELECT * FROM usuarios', (err, users) => {
        if(err){
            console.log(err);
        }else{
            res.render('adm_users', {layout: 'admin', users: users})
        }
    })
}

controller.crear_perfil = async(req,res) => {
    const{usuario, email, telefono, contra} = req.body;
    const crearPerfil = {
        usuario,
        email,
        telefono,
        contra
    }
    await conexion.query('INSERT INTO usuarios SET ?', [crearPerfil], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('login');
        }
    });
}

// ================================================================



// Controlador Hamburguesas

//Listar
controller.listar_hg = async(req,res) => {
    await conexion.query('SELECT * FROM hamburguesas', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('usuarios/hg', {layout: 'index', results: results})
        }
    });   
}

controller.listar_adm_hg = async(req,res) => {
    await conexion.query('SELECT * FROM hamburguesas', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('adm_hg', {layout: 'admin', results: results})
        }
    });   
}
//Crear
controller.crear_hg = async(req,res) => {
    const {foto_hg, nombre_hg, descripcion_hg, precio_hg} = req.body;
    const crearHamburguesa = {
        foto_hg,
        nombre_hg,
        descripcion_hg,
        precio_hg
    }
    await conexion.query('INSERT INTO hamburguesas SET ?', [crearHamburguesa], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('back');
        }
    });
}
// Eliminar
controller.eliminar_hg = async(req,res) => {
    const {id_hg} = req.params;
    await conexion.query('DELETE FROM hamburguesas WHERE id_hg = ?', [id_hg], (err, rows) => {
        res.redirect('back');
    });
}

// ==================================================================


// Controlador Sandwich
controller.listar_sd = async(req,res) => {
    await conexion.query('SELECT * FROM sandwich', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('usuarios/sandwich', {layout: 'index', results: results})
        }
    });
}

controller.listar_adm_sd = async(req,res) => {
    await conexion.query('SELECT * FROM sandwich', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('adm_sd', {layout: 'admin', results: results})
        }
    });   
}
// Crear
controller.crear_sd = async(req,res) => {
    const {foto_sandwich, nombre_sandwich, descripcion_sandwich, precio_sandwich} = req.body;
    const crearSandwich = {
        foto_sandwich,
        nombre_sandwich,
        descripcion_sandwich,
        precio_sandwich
    }
    await conexion.query('INSERT INTO sandwich SET ?', [crearSandwich], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('back');
        }
    });
}

// Eliminar
controller.eliminar_sd = async(req,res) => {
    const {id_sandwich} = req.params;
    await conexion.query('DELETE FROM sandwich WHERE id_sandwich = ?', [id_sandwich], (err, rows) => {
        res.redirect('back');
    });
}


//==================================================================

// Controlador Jugos

controller.listar_jugos = async(req,res) => {
    await conexion.query('SELECT * FROM naturales', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('usuarios/jugos', {layout: 'index', results:results});
        }
    });
}

controller.listar_adm_jugos = async(req,res) => {
    await conexion.query('SELECT * FROM naturales', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('adm_jugos', {layout: 'admin', results: results});
        }
    })
}

// Crear
controller.crear_jugos = async(req,res) => {
    const {foto_jugo, nombre_jugo, descripcion_jugo, precio_jugo} = req.body;
    const crearJugo = {
        foto_jugo,
        nombre_jugo,
        descripcion_jugo,
        precio_jugo
    }
    await conexion.query('INSERT INTO naturales SET ?', [crearJugo], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('adm_jugos');
        }
    })
}
// ==================================================================



// Controlador Gaseosas

controller.listar_gaseosas = async(req,res) => {
    await conexion.query('SELECT * FROM gaseosas', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('usuarios/gaseosas', {layout: 'index', results: results});
        }
    });
}

controller.listar_adm_gaseosas = async(req,res) => {
    await conexion.query('SELECT * FROM gaseosas', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('adm_gaseosas', {layout: 'admin', results: results})
        }
    })
}

// Crear
controller.crear_gaseosas = async(req,res) => {
    const {foto_gaseosas, nombre_gaseosas, descripcion_gaseosas, precio_gaseosas} = req.body;
    const crearGaseosa = {
        foto_gaseosas,
        nombre_gaseosas,
        descripcion_gaseosas,
        precio_gaseosas
    }
    await conexion.query('INSERT INTO gaseosas SET ?', [crearGaseosa], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('adm_gaseosas');
        }
    })
}
// ===================================================================



// Controlador Adicionales

controller.listar_adicionales = async(req,res) => {
    await conexion.query('SELECT * FROM adicionales', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('usuarios/adicionales', {layout:'index', results:results});
        }
    });
}

controller.listar_adm_adicionales = async(req,res) => {
    await conexion.query('SELECT * FROM adicionales', (err,results) => {
        if(err){
            console.log(err);
        }else{
            res.render('adm_adicionales', {layout: 'admin', results: results});
        }
    });
}

// Crear

controller.crear_adicionales = async(req,res) => {
    const {foto_adicionales, nombre_adicionales, descripcion_adicionales, precio_adicionales} = req.body;
    const crearAdicionales = {
        foto_adicionales,
        nombre_adicionales,
        descripcion_adicionales,
        precio_adicionales
    }
    await conexion.query('INSERT INTO adicionales SET ?', [crearAdicionales], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('adm_adicionales');
        }
    });
}

// ====================================================================




// Controlador Ensaladas

controller.listar_ensaladas = async(req,res) => {
    await conexion.query('SELECT * FROM ensaladas', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('usuarios/ensaladas', {layout: 'index', results: results});
        }
    });
}

controller.listar_adm_ensaladas = async(req,res) => {
    await conexion.query('SELECT * FROM ensaladas', (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.render('adm_ensaladas', {layout: 'admin', results: results});
        }
    });
}

// Crear

controller.crear_ensaladas = async(req,res) => {
    const {foto_ensaladas, nombre_ensaladas, descripcion_ensaladas, precio_ensaladas} = req.body;
    const crearEnsaladas = {
        foto_ensaladas,
        nombre_ensaladas,
        descripcion_ensaladas,
        precio_ensaladas
    }
    await conexion.query('INSERT INTO ensaladas SET ?',[crearEnsaladas], (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('adm_ensaladas');
        }
    });
}



// ====================================================================



module.exports = controller;