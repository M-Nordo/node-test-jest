const express = require('express');
const router = express.Router();
const axios = require('axios');

router.use('/api/users', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://localhost:3001/users`,
      data: req.body,
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Error calling user service' });
  }
});

router.use('/api/orders', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://localhost:3002/orders`,
      data: req.body,
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Error calling order service' });
  }
});

router.use('/api/products', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://localhost:3003/products`,
      data: req.body,
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Error calling product service' });
  }
});

module.exports = router;