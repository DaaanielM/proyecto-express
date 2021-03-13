const conexion = require('../database/db');


const model = {};


model.listar = async () => {
    try {
        const sql =
            `SELECT co.correo, co.mensaje, tc.nombre FROM contactos co
        INNER JOIN tipos_contactos tc ON tc.id = co.id`;
        console.log("entro al modelo");
        const resultados = await conexion.query(sql);
        return resultados;
    } catch (error) {
        console.log(error);
    }
}

model.crear = async (datos) => {
    try {
        const sql = `INSERT INTO contactos SET ?`;
        await conexion.query(sql, datos);
    } catch (error) {
        console.log(error);
    }
}

model.actualizar = async (datos, id) => {
    try {
        const sql = `UPDATE contactos SET ? WHERE id = ${id}`;
        await conexion.query(sql, datos);
    } catch (error) {
        console.log(error);
    }
}

model.eliminar = async (id) => {
    try {
        const sql = `DELETE FROM contactos WHERE id = ${id}`
        await conexion.query(sql);
    } catch (error) {
        console.log(error);
    }
}



module.exports = model;