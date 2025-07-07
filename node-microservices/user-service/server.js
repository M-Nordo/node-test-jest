const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const { username, email } = req.body;
  res.status(201).json({ message: `User ${username} created successfully!` });
});

app.get('/users', (req, res) => {
  res.json([{ username: 'mehmetyayla', email: 'mehmet@yayla.com' }]);
});

if (require.main === module) {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
  });
}

module.exports = app;