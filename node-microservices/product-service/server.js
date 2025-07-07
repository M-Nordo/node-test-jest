const express = require('express');
const app = express();

app.use(express.json());

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({ message: `Product ${name} created with price ${price}` });
});

app.get('/products', (req, res) => {
  res.json([{ productId: 101, name: 'Laptop', price: 1500 }]);
});

if (require.main === module) {
  const PORT = 3003;
  app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
  });
}

module.exports = app;