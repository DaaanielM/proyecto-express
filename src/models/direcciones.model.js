const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT di.id, di.direccion, di.barrio, di.adicionales, us.nombre, us.correo, us.telefono, us.id id_usuario FROM direcciones di
        INNER JOIN usuarios us ON us.id = di.id_usuario
        `;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = 'INSERT INTO direcciones SET ?';
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE direcciones SET ? WHERE id = ${id}`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.obtenerDirecciones = async (id) => {
	try {
		const sql = `SELECT * FROM direcciones WHERE id = ${id}`;
		const resultados = await conexion.query(sql);
		return resultados && resultados.length ? resultados[0] : null; // Validar que exista un array que esta lleno y si esta lleno devuelva el primer elemento del array
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		const sql = `DELETE FROM direcciones WHERE id = ${id}`;
		await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
