const model = require('../models/pedidos.model');

const controller = {};

controller.listar = async (req, res) => {
	try {
		const id = req.params.idUsuario;
		resultados = await model.listar(id);
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
controller.obtenerPedido = async (req, res) => {
	try {
		const resultados = await model.obtenerPedido(req.params.id);
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
controller.crear = async (req, res) => {
	try {
		const datos = {
			id_usuario: req.body.id_usuario,
			id_direccion: req.body.id_direccion,
		};
		const datosProductos = req.body.productos;
		await model.crear(datos, datosProductos);
		res.json({
			mensaje: 'Elemento creado correctamente',
			error: false,
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
			id_usuario: req.body.id_usuario,
			id_direccion: req.body.id_direccion,
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
