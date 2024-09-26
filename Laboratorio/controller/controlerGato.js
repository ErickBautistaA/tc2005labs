const modelo = require('../model/modelMascota'); 

exports.getAllUsers = async (req, res, next) => {

    try {
        const Usuario = await modelo.usuarios.getUsuarios();
        console.log(Usuario);

        const UsuariosArray = Array.isArray(Usuario) ? Usuario : [Usuario];
        res.render('principal', { Usuario: UsuariosArray });

        //res.render('empleados', {Trabajadores});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar la página principal');
    }
};

// cambio nuevo gato, incluimos const Usuario para obtener los datos del usuario asi ya no llamamos a otra funcion.
exports.nuevoGato = async (req, res, next) => {
    try {
        const Usuario = await modelo.usuarios.getUsuarios();
        const nombre = req.body.nombre;
        const color = req.body.color;
        const idDueno = req.body.idDueno;
        const gato = await modelo.gato.registrarGato(nombre, color, idDueno);

        if (!gato) {
            return res.render('principal', { mensaje: 'Error al crear el gato' });
        }

        res.render('principal', { Usuario });
    } catch (e) {
        console.error(e);
        res.status(500).render('principal', { mensaje: 'Error al cargar los datos', Usuario });
    }
};