// rutas/ruta.js
const express = require('express');
const router = express.Router();
const aController = require('../controller/a_controler');

// Definir las rutas
router.get('/', aController.getIndex);
router.get('/principal', aController.getPrincipal);
router.get('/DonGato', aController.getDonGato);
router.get('/gato', aController.getGato);

module.exports = router;
