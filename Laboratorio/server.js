const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Inicializar la aplicación de Express
const app = express();
const PORT = 3001; 

// Middleware para procesar formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', 'views');


// Importar las rutas modularizadas
const rutasUser = require('./rutas/ruta');

const rutaMascota = require('./rutas/mascotas');
// Usar las rutas importadas con prefijo /users para las rutas de login y registro
app.use('/users', rutasUser);

app.use('/mascotas', rutaMascota);



// Ruta para manejar 404
app.use((req, res) => {
    res.status(404).render('404', { pageTitle: 'Página no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
