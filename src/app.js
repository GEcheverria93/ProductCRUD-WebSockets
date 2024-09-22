const express = require('express');
const cors = require('cors');
const handlebars = require('express-handlebars');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.engine('handlebars', handlebars.engine());
app.set('view', `${__dirname}view`);
app.set('views engine', 'handlebars');
app.use(express.static(`${__dirname}public`));

app.get('/', (req, res) => {
    res.send('hola');
});

module.exports = app;
