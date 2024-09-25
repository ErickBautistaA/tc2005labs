const express = require('express');
const router = express.Router();
const Controller = require('../controller/controlerGato');

router.get('/principal/ngato', Controller.nuevoGato);

router.get('/principal', Controller.getAllUsers);
router.post('/principal', Controller.getAllUsers);

module.exports = router;