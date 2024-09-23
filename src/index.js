/* eslint-disable node/no-unsupported-features/es-syntax */
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 4000;

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});

module.exports = { httpServer };
require('./sockets');
