const conexion = require('../database/db');

const model = {};

model.listar = async (idUsuario) => {
	try {
		const sql = `SELECT us.nombre, us.telefono, di.direccion, di.barrio, pe.id FROM pedidos pe
        INNER JOIN usuarios us ON us.id = pe.id_usuario
        INNER JOIN direcciones di ON di.id = pe.id_direccion
        WHERE pe.id_usuario = ${idUsuario}`;
		let resultados = await conexion.query(sql);
		await model.obtenerProductos(resultados);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.obtenerProductos = async (datos) => {
	try {
		const datosModificados = datos.map(async (pedido) => {
			const sql = `SELECT  
                                pr.nombre, 
                                pr.descripcion,
                                pr.precio,
                                pp.cantidad,
                                (pr.precio * pp.cantidad) AS precio_total
                        FROM productos_pedidos pp
                        INNER JOIN productos pr ON pr.id = pp.id_producto
                        WHERE pp.id_pedido = ${pedido.id}`;
			pedido.productos = await conexion.query(sql);
		});
		return Promise.all(datosModificados);
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos, datosProductos) => {
	try {
		const sql = 'INSERT INTO pedidos SET ?';
		const { insertId } = await conexion.query(sql, datos);
		const idPedido = insertId;
		await model.crearProductosPedido(idPedido, datosProductos);
	} catch (error) {
		console.log(error);
	}
};

model.crearProductosPedido = async (idPedido, datos) => {
	datos.forEach(async (producto) => {
		producto.id_pedido = idPedido;
		const sqlProductos = `INSERT INTO productos_pedidos SET ? `;
		await conexion.query(sqlProductos, producto);
	});
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE pedidos SET ? WHERE id = ${id}`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		let sql = `DELETE FROM pedidos WHERE id = ${id}`;
		await conexion.query(sql);
		sql = `DELETE FROM productos_pedidos WHERE id_pedido = ${id}`;
		await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
