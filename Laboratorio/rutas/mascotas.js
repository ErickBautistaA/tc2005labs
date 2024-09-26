const express = require('express');
const router = express.Router();
const Controller = require('../controller/controlerGato');
router.get('/principal/ngato', Controller.nuevoGato);
router.post('/principal/ngato', Controller.nuevoGato);


module.exports = router;