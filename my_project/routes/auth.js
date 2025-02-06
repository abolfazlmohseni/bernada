const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// ثبت‌نام کاربر
router.post('/register', async (req, res) => {
  const { username, lastName, numberPhone, password } = req.body;

  try {
    const userExists = await User.findOne({ numberPhone });
    if (userExists) {
      return res.status(400).send('User with this phone number already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      lastName,
      numberPhone,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Server error');
  }
});

// ورود کاربر (با ارسال اطلاعات کاربر)
router.post('/login', async (req, res) => {
  const { numberPhone, password } = req.body;

  try {
    const user = await User.findOne({ numberPhone });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // ارسال اطلاعات کاربر به فرانت‌اند
    res.json({ 
      message: 'Login successful', 
      user: { 
        username: user.username, 
        numberPhone: user.numberPhone,
        lastName: user.lastName,
      } 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
