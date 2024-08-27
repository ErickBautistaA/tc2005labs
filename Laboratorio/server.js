const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Necesario para manejar datos de formularios

const app = express();
const PORT = 3000;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas principales (puedes modularizarlas en archivos separados)
app.get('/', (req, res) => {
    res.render('index'); // Usamos render para vistas con EJS
});

app.get('/principal', (req, res) => {
    res.render('principal');
});

app.get('/DonGato', (req, res) => {
    res.render('DonGato');
});

app.get('/gato', (req, res) => {
    res.render('gato');
});

// Ejemplo de ruta POST para manejar un formulario
app.post('/submit-form', (req, res) => {
    const { password, confirmPassword } = req.body;
    if (password === confirmPassword) {
        res.render('resultado', { mensaje: '¡Las contraseñas coinciden!' });
    } else {
        res.render('resultado', { mensaje: 'Las contraseñas no coinciden. Inténtalo de nuevo.' });
    }
});

// Ruta para manejar 404
app.use((req, res) => {
    res.status(404).render('404', { pageTitle: 'Página no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
