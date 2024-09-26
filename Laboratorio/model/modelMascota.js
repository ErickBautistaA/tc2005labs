const db = require('../util/database');

exports.usuarios = class {
    static async getUsuarios() {
        try {
            const connection = await db();
            const [result] = await connection.execute(`
                SELECT * FROM usuario
            `);
            await connection.release();
            return result;
        } catch (e) {
            throw e;
        }
    }
}

exports.gato = class {
    static async registrarGato(nombre, color, id) {
        const connection = await db();
        try {
            await connection.beginTransaction();

            // Consulta SQL corregida mi tabla se llama gato no gatos..
            const [result] = await connection.execute(
                'INSERT INTO gato (nombre, color, idDueno) VALUES (?, ?, ?)', 
                [nombre, color, id]
            );

            // 'result' contiene información sobre la operación, como el insertId
            const insertedId = result.insertId; 

            await connection.commit();
            return insertedId; // O cualquier dato relevante que desees devolver
        } catch (e) {
            await connection.rollback();
            throw e;
        } finally {
            await connection.release();
        }
    }

    static async getGatos(){
        const connection = await db();
        try {
            await connection.beginTransaction();

            const [result] = await connection.execute(
                'SELECT * FROM gato'
            );
            
            await connection.commit();
            return result;
        } catch (e) {
            await connection.rollback();
            throw e;
        } finally {
            await connection.release();
        }
    }
}
