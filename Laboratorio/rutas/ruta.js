const express = require('express');
const router = express.Router();
const aController = require('../controller/a_controler');


const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

// Definir las rutas
router.get('/login', aController.verificarUser);
router.post('/login', aController.verificarUser);


router.get('/DonGato', aController.getDonGato);
router.get('/gato', aController.getGato);



module.exports = router;
