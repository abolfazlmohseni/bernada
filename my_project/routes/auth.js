const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');  // مدل کاربر

const router = express.Router();

// روت ثبت‌نام
router.post('/register', async (req, res) => {
  const { username, numberPhone, password } = req.body;

  try {
    // بررسی تکراری بودن شماره تلفن
    const existingUser = await User.findOne({ numberPhone });
    if (existingUser) {
      return res.status(400).json({ message: 'این شماره تلفن قبلاً ثبت شده است' });
    }

    // هش کردن پسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // ذخیره کاربر جدید
    const newUser = new User({
      username,
      numberPhone,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'ثبت نام موفقیت آمیز بود' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'خطا در ثبت نام' });
  }
});



// روت ورود
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

