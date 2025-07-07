const createProduct = (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({ message: `Product ${name} created with price ${price}.` });
};

const getProducts = (req, res) => {
  res.json([{ productId: 101, name: 'Laptop', price: 1500 }]);
};

module.exports = {
  createProduct,
  getProducts,
};