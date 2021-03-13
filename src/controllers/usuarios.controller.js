const model = require('../models/usuarios.model');

const controller = {};

controller.listar = async (req, res) => {
    try {
        const resultados = await model.listar();
        res.json({
            datos: resultados
        })
    } catch (error) {
        console.log(error);
    }
}

controller.crear = async (req, res) => {
    try {
        const datos = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            telefono: req.body.telefono,
            contrasena: req.body.contrasena
        }
        await model.crear(datos);
        res.json({
            mensaje: "Elemento creado correctamente",
            error: false
        })
    } catch (error) {
        res.json({
            mensaje: "Ha ocurrido un error, contacte con el admin",
            error: true
        })
    }
}

controller.actualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            telefono: req.body.telefono,
            contrasena: req.body.contrasena
        }
        await model.actualizar(datos, id);
        res.json({
            mensaje: "Elemento actualizado correctamente",
            error: false
        })
    } catch (error) {
        res.json({
            mensaje: "Ha ocurrido un error, contacte con el admin",
            error: true
        })
    }
}

controller.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        await model.eliminar(id);
        res.json({
            mensaje: "Elemento eliminado correctamente",
            error: false
        })
    } catch (error) {
        res.json({
            mensaje: "Ha ocurrido un error, contacte con el admin",
            error: true
        })
    }
}

module.exports = controller;