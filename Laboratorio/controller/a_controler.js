// controllers/a_controller.js
exports.getIndex = (req, res, next) => {
    res.render('Index', {
        title: 'Inicio de sesion',
        message: 'Bienvenido'
    });
};

exports.getPrincipal = (req, res, next) => {
    res.render('principal', {
        title: 'Página Principal',
        message: 'Bienvenido a la página principal'
    });
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
