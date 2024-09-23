const fS = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
    const data = fS.readFileSync(productsFilePath, 'utf-8');

    return JSON.parse(data);
};

const writeProducts = (products) => {
    fS.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

const generateNewProductId = (products) =>
    Math.max(...products.map((p) => Number(p.id)), 0) + 1;

const deleteProduct = (id) => {
    const products = readProducts();
    const filteredProducts = products.filter((p) => p.id !== Number(id));

    writeProducts(filteredProducts);
};

module.exports = {
    readProducts,
    writeProducts,
    deleteProduct,
    generateNewProductId,
};
