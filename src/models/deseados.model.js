const conexion = require('../database/db');

const model = {};

model.listar = async () => {
    try {
        sql = 'SELECT * FROM deseados';
        const resultados = await conexion.query(sql);
        return resultados;
    } catch (error) {
        console.log(error);
    }
}

model.crear = async (datos) => {
    try {
        const sql = 'INSERT INTO deseados SET ?';
        await conexion.query(sql, datos);
    } catch (error) {

    }
}

model.actualizar = () => {

}

model.eliminar = () => {

}

module.exports = model;