const createUser = (req, res) => {
  const { username, email } = req.body;
  res.status(201).json({ message: `User ${username} created successfully!` });
};

const getUsers = (req, res) => {
  res.json([{ username: 'mehmetyayla', email: 'mehmet@yayla.com' }]);
};

module.exports = {
  createUser,
  getUsers,
};