const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();
// ثبت‌نام کاربر جدید
router.post('/register', async (req, res) => {
  const { username, numberPhone, password } = req.body;

  try {
 
    const existingUser = await User.findOne({ numberPhone });
    if (existingUser) {
      
      return res.status(400).json({ message: 'کاربر با این شماره تلفن قبلاً ثبت‌نام کرده است.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      numberPhone,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: 'ثبت‌نام با موفقیت انجام شد.',
      user: {
        username: newUser.username,
        numberPhone: newUser.numberPhone,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'خطا در ثبت‌نام، لطفاً دوباره تلاش کنید.' });
  }
});

module.exports = router;

// ورود کاربر
router.post('/login', async (req, res) => {
  const { numberPhone, password } = req.body;

  try {
    const user = await User.findOne({ numberPhone });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });


    res.json({
      message: 'Login successful',
      user: {
        username: user.username,
        numberPhone: user.numberPhone,
        lastName: user.lastName,
      }
    });
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;

