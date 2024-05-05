const asyncHandler = require('express-async-handler');

// Register a new a new user
// /api/users
// public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.send('Register Route');
});

// User a login
// /api/users/login
// public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = {
  registerUser,
  loginUser,
};
