const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT pr.id, pr.nombre, pr.precio, pr.foto, pr.descripcion, ca.nombre AS categoria
                        FROM productos pr
                        INNER JOIN categorias ca ON ca.id = pr.id_categoria`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};
model.obtenerProducto = async (id) => {
	try {
		const sql = `SELECT * FROM productos WHERE id = ${id}`;
		const resultados = await conexion.query(sql);
		return resultados && resultados.length ? resultados[0] : null; // Validar que exista un array que esta lleno y si esta lleno devuelva el primer elemento del array
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = 'INSERT INTO productos SET ?';
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE productos SET ? WHERE id = ${id}`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		const sql = `DELETE FROM productos WHERE id = ${id}`;
		await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
