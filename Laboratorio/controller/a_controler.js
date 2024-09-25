
const modelo = require('../model/a_model'); 

// Controlador para manejar la solicitud GET
exports.getDuper = async (req, res, next) => {
    try {
        const data = await modelo.getAllData(); 
        res.render('principal', { data }); // Renderiza la vista `main` con los datos obtenidos
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar la página principal');
    }
};

// Controlador para manejar la solicitud POST
exports.postDuper = async (req, res, next) => {
    try {
        await modelo.saveData(req.body); // Guarda los datos enviados en el formulario
        res.redirect('/principal'); // Redirige a la ruta `/main` después de procesar la solicitud
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al procesar la solicitud');
    }
};

exports.getDonGato = (req, res, next) => {
    res.render('DonGato', {
        title: 'Don Gato',
        message: 'Información sobre Don Gato'
    });
};

exports.getGato = (req, res, next) => {
    res.render('gato', {
        title: 'Gato',
        message: 'Información sobre gatos'
    });
};

exports.verificarUser = async (req, res, next) => {
    try{
        const userCorreo = req.body.email
        const userContrasena = req.body.password

        const usuario = await modelo.usuarios.verifyUser(userCorreo, userContrasena) 

        console.log(usuario)

        if (!usuario){
            res.render('login')
        }

        res.redirect('/mascotas/principal')
    } catch (e) {
        console.error(e)
        res.render('login')
    }
};

