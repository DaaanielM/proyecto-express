const conexion = require('../database/db');

const model = {};

model.listar = async () => {
    try {
        const sql = `SELECT us.nombre, us.telefono, di.direccion, di.barrio FROM pedidos pe
        INNER JOIN usuarios us ON us.id = pe.id_usuario
        INNER JOIN direcciones di ON di.id = pe.id_direccion`;
        const resultados = await conexion.query(sql);
        return resultados;
    } catch (error) {
        console.log(error);
    }
}

model.obtenerProductos = async () => {
    // NO SE USA POR AHORA
    try {
        const sql = `SELECT us.nombre, us.telefono, di.nombre, di.barrio FROM pedidos pe
                    INNER JOIN usuarios us ON us.id = pe.id_usuario
                    INNER JOIN direcciones di ON di.id = pe.id_direccion`;
        const resultados = await conexion.query(sql);
        return resultados;
    } catch (error) {
        console.log(error);
    }
}

model.crear = async (datos, datosProductos) => {
    try {
        const sql = "INSERT INTO pedidos SET ?";
        const {
            insertId
        } = await conexion.query(sql, datos);
        const idPedido = insertId;
        await model.crearProductosPedido(idPedido, datosProductos);
    } catch (error) {
        console.log(error)
    }
}

model.crearProductosPedido = async (idPedido, datos) => {
    datos.forEach(async (producto) => {
        producto.id_pedido = idPedido;
        const sqlProductos = `INSERT INTO productos_pedidos SET ? `;
        await conexion.query(sqlProductos, producto);
    })
}

model.actualizar = async (datos, id) => {
    try {
        const sql = `UPDATE pedidos SET ? WHERE id = ${id}`;
        await conexion.query(sql, datos);
    } catch (error) {
        console.log(error);
    }
}

model.eliminar = async (id) => {
    try {
        const sql = `DELETE FROM pedidos WHERE id = ${id}`;
        await conexion.query(sql);
    } catch (error) {
        console.log(error);
    }
}


module.exports = model;