const dotenv = require('dotenv');
const { Server } = require('socket.io');
const app = require('./app');
const { readProducts } = require('./services/productService');

dotenv.config();

const PORT = process.env.PORT || 4000;

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});

// eslint-disable-next-line no-unused-vars
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    const products = readProducts();
    socket.emit('productListUpdated', products);
});
