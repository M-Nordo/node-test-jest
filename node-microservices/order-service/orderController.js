const createOrder = (req, res) => {
  const { userId, productId, quantity } = req.body;
  res.status(201).json({ message: `Order created for user ${userId} with product ${productId}. Quantity: ${quantity}` });
};

const getOrders = (req, res) => {
  res.json([{ orderId: 1, userId: 1, productId: 101, quantity: 2 }]);
};

module.exports = {
  createOrder,
  getOrders,
};