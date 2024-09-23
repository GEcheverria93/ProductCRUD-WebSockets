/* eslint-disable node/no-unsupported-features/es-syntax */
const { Server } = require('socket.io');
const {
    readProducts,
    writeProducts,
    deleteProduct,
    generateNewProductId,
} = require('./services/productService');
const { httpServer } = require('.');

const io = new Server(httpServer);

io.on('connection', (socket) => {
    // Enviar la lista de productos cuando el cliente se conecta
    const products = readProducts();
    socket.emit('productListUpdated', products);

    // Escuchar cuando se agrega un nuevo producto
    socket.on('addProduct', (product) => {
        const productList = readProducts();
        const newProduct = {
            id: generateNewProductId(productList),
            ...product,
        };
        productList.push(newProduct);
        writeProducts(productList);
        // Emitir la lista actualizada
        io.emit('productListUpdated', productList);
    });

    // Escuchar cuando se elimina un producto
    socket.on('deleteProduct', (productId) => {
        deleteProduct(productId);
        const productList = readProducts();
        io.emit('productListUpdated', productList);
    });
});
