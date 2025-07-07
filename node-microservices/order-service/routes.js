const express = require('express');
const router = express.Router();
const orderController = require('./orderController');

router.post('/orders', orderController.createOrder);

router.get('/orders', orderController.getOrders);

module.exports = router;