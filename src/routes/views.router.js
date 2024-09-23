const express = require('express');
const { readProducts } = require('../services/productService');

const router = express.Router();

router.get('/', (req, res) => {
    const products = readProducts();
    res.render('home', { products, title: 'Home' });
});

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', { title: 'Real Time Products' });
});

module.exports = router;
