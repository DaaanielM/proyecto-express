const model = require('../models/direcciones.model');

const controller = {};

controller.listar = async (req, res) => {
	try {
		const resultados = await model.listar();
		res.json({
			datos: resultados,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error contacte con el admin',
			error: true,
		});
	}
};

controller.crear = async (req, res) => {
	try {
		const datos = {
			direccion: req.body.direccion,
			barrio: req.body.barrio,
			adicionales: req.body.adicionales,
			id_usuario: req.body.id_usuario,
		};
		await model.crear(datos);
		res.json({
			mensaje: 'Elemento creado correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error contacte con el admin',
			error: true,
		});
	}
};

controller.obtenerDirecciones = async (req, res) => {
	try {
		const resultados = await model.obtenerDirecciones(req.params.id);
		res.json({
			datos: resultados,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error, contacte con el admin',
			error: true,
		});
	}
};

controller.actualizar = async (req, res) => {
	try {
		const id = req.params.id;
		const datos = {
			direccion: req.body.direccion,
			barrio: req.body.barrio,
			adicionales: req.body.adicionales,
			id_usuario: req.body.id_usuario,
		};
		await model.actualizar(datos, id);
		res.json({
			mensaje: 'Elemento actualizado correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error, contacte con el admin',
			error: true,
		});
	}
};

controller.eliminar = async (req, res) => {
	try {
		const id = req.params.id;
		await model.eliminar(id);
		res.json({
			mensaje: 'Elemento eliminado correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error, contacte con el admin',
			error: true,
		});
	}
};

module.exports = controller;
