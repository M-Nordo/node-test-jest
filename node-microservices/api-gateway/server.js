const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/users', (req, res) => {
  axios({
    method: req.method,
    url: `http://localhost:3001/users`,
    data: req.body
  })
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ message: 'Error calling user service' }));
});

app.use('/api/orders', (req, res) => {
  axios({
    method: req.method,
    url: `http://localhost:3002/orders`,
    data: req.body
  })
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ message: 'Error calling order service' }));
});

app.use('/api/products', (req, res) => {
  axios({
    method: req.method,
    url: `http://localhost:3003/products`,
    data: req.body
  })
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ message: 'Error calling product service' }));
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});