const model = require('../models/deseados.model');

const controller = {};

controller.listar = async (req, res) => {
	try {
		const id = req.params.id;
		const resultados = await model.listar(id);
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
			id_producto: req.body.id_producto,
		};
		await model.crear(datos);
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

controller.eliminar = async (req, res) => {
	try {
		const idUsuario = req.params.idUsuario;
		const idProducto = req.params.idProducto;
		await model.eliminar(idUsuario, idProducto);
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
