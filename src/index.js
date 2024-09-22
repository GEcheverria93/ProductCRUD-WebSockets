const dotenv = require('dotenv');
const { Server } = require('socket.io');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 4000;

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});

// eslint-disable-next-line no-unused-vars
const io = new Server(httpServer);
