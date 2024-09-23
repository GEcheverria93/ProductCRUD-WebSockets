const fS = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
    const data = fS.readFileSync(productsFilePath, 'utf-8');

    return JSON.parse(data);
};

module.exports = {
    readProducts,
};
