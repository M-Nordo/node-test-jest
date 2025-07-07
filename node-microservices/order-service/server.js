const express = require('express');
const app = express();

app.use(express.json());

app.post('/orders', (req, res) => {
  const { userId, productId, quantity } = req.body;
  res.status(201).json({ message: `Order created for user ${userId} with product ${productId}. Quantity: ${quantity}` });
});

app.get('/orders', (req, res) => {
  res.json([{ orderId: 1, userId: 1, productId: 101, quantity: 2 }]);
});

if (require.main === module) {
  const PORT = 3002;
  app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
  });
}

module.exports = app;