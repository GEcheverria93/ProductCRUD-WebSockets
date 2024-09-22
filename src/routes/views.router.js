const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('path para las vistas');
});

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts');
});

module.exports = router;
