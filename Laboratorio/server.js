const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Inicializar la aplicación de Express
const app = express();
const PORT = 3000; // O el puerto que estés usando

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Importar las rutas modularizadas
const rutas = require('./rutas/ruta');

// Usar las rutas importadas
app.use(rutas);

// Ruta para manejar 404
app.use((req, res) => {
    res.status(404).render('404', { pageTitle: 'Página no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
