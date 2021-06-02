const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT * FROM usuarios`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = `INSERT INTO usuarios SET ?`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.obtenerUsuario = async (id) => {
	try {
		const sql = `SELECT * FROM usuarios WHERE id = ${id}`;
		const resultados = await conexion.query(sql);
		return resultados && resultados.length ? resultados[0] : null; // Validar que exista un array que esta lleno y si esta lleno devuelva el primer elemento del array
	} catch (error) {
		console.log(error);
	}
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE usuarios SET ? WHERE id = ${id}`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		let sql = `DELETE FROM usuarios WHERE id = ${id}`;
		await conexion.query(sql);
		sql = `DELETE FROM direciones WHERE id_usuario = ${id}`;
		await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
