const conexion = require('../database/db');

const model = {};

model.listar = async (id) => {
	try {
		sql = `SELECT 
        de.id_usuario,
        pr.nombre,
        pr.precio,
        pr.foto
        FROM deseados de
        INNER JOIN productos pr ON pr.id = de.id_producto
        WHERE de.id_usuario = ${id}`;
		console.log(sql);
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = 'INSERT INTO deseados SET ?';
		await conexion.query(sql, datos);
	} catch (error) {}
};

model.actualizar = () => {};

model.eliminar = async (idUsuario, idProducto) => {
	try {
		const sql = `DELETE FROM deseados WHERE id_usuario = ${idUsuario} AND id_producto = ${idProducto} `;
		console.log(sql);
		await conexion.query(sql);
	} catch (error) {}
};

module.exports = model;
