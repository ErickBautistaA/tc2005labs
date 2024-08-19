const express = require('express');
const path = require('path');
const { pathToFileURL } = require('url');

const app = express();
const PORT = 3000;

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta para el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ruta para otro lado
app.get('/DonGato',(req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'DonGato.html'));
});

// a gato
app.get('/gato',(req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'gato.html'));
});

// Manejo de rutas no existentes (404)
app.use((req, res) => {
    res.status(404).send('Página no encontrada (error 404).');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
