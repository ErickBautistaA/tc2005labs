const db = require('../util/database');

exports.usuarios = class {
    // Verificar usuario para inicio de sesión
    static async verifyUser(correo, contrasena) {
        const connection = await db();
        try {
            await connection.beginTransaction();
    
            const [rows] = await connection.execute(`
                SELECT * FROM usuario 
                WHERE usuario = ? AND password = ?`, 
                [correo, contrasena]
            );
    
            const realResult = rows[0];
            
            await connection.commit();
            return realResult;
        } catch (e) {
            await connection.rollback();
            throw e;
        } finally {
            await connection.release();
        }
    }
}

