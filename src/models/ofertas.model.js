const conexion = require('../database/db');

const model = {};

model.listar = async () => {
    try {
        const sql = 'SELECT * FROM ofertas';
        const resultados = await conexion.query(sql);
        return resultados;
    } catch (error) {
        console.log(error);
    }
}


model.crear = async (datos) => {
    try {
        const sql = 'INSERT INTO ofertas SET ?';
        await conexion.query(sql, datos);
    } catch (error) {
        console.log(error);
    }
}


model.actualizar = async (datos, id) => {
    try {
        const sql = `UPDATE ofertas SET ? WHERE id = ${id}`
        await conexion.query(sql, datos);
    } catch (error) {
        console.log(error);
    }
}

model.eliminar = async (id) => {
    try {
        const sql = `DELETE FROM ofertas WHERE id = ${id}`
        await conexion.query(sql);
    } catch (error) {
        console.log(error);
    }
}

module.exports = model;