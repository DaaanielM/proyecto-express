const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		sql = `SELECT * FROM deseados`;
		console.log(sql);
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};
// model.listar = async () => {
// 	try {
// 		sql = `SELECT
//         de.id_usuario,
//         pr.nombre,
//         pr.precio,
//         pr.foto
//         FROM deseados de
//         INNER JOIN productos pr ON pr.id = de.id_producto`;
// 		console.log(sql);
// 		const resultados = await conexion.query(sql);
// 		return resultados;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

model.crear = async (datos) => {
	try {
		const sql = 'INSERT INTO deseados SET ?';
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.obtenerDeseado = async (id) => {
	try {
		const sql = `SELECT * FROM deseados WHERE id = ${id}`;
		const resultados = await conexion.query(sql);
		return resultados && resultados.length ? resultados[0] : null; // Validar que exista un array que esta lleno y si esta lleno devuelva el primer elemento del array
	} catch (error) {
		console.log(error);
	}
};
model.actualizar = () => {};

model.eliminar = async (idUsuario, idProducto) => {
	try {
		const sql = `DELETE FROM deseados WHERE id_usuario = ${idUsuario} AND id_producto = ${idProducto} `;
		console.log(sql);
		await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
