const asyncHandler = require('express-async-handler');
// Will hash the password
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

// Register a new a new user
// /api/users
// public
const registerUser = asyncHandler(async (req, res) => {
  // Getting the body data
  const { name, email, password } = req.body;

  // Validation (if its not there - throw an error)
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user already exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(200).json({
      // This come from the user that was created(line 32)
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new error('Invalid user data');
  }
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
