const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const viewsRoutes = require('./routes/views.router');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Configuración de Handlebars con extensión '.hbs'
app.engine(
    '.hbs',
    exphbs.engine({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
    })
);

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views')); // Define la carpeta 'views'
app.set('view engine', '.hbs'); // Configura el motor de vistas para usar .hbs

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', viewsRoutes);

module.exports = app;
