const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT co.id, co.correo, co.mensaje, tc.nombre FROM contactos co
        INNER JOIN tipos_contactos tc ON tc.id = co.id_tipo_contacto`;
		console.log('entro al modelo');
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.obtenerContacto = async (id) => {
	try {
		const sql = `SELECT * FROM contactos WHERE id = ${id}`;
		const resultados = await conexion.query(sql);
		return resultados && resultados.length ? resultados[0] : null; // Validar que exista un array que esta lleno y si esta lleno devuelva el primer elemento del array
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = `INSERT INTO contactos SET ?`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE contactos SET ? WHERE id = ${id}`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		const sql = `DELETE FROM contactos WHERE id = ${id}`;
		await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
