const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta para el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
