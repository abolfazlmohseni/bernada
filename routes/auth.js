const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();
// ثبت‌نام کاربر جدید
router.post('/register', async (req, res) => {
  const { name, phone, password } = req.body;

  try {
 
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      
      return res.status(400).json({ message: 'کاربر با این شماره تلفن قبلاً ثبت‌نام کرده است.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: 'ثبت‌نام با موفقیت انجام شد.',
      user: {
        name: newUser.name,
        phone: newUser.phone,
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
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });


    res.json({
      message: 'Login successful',
      user: {
        name: user.name,
        phone: user.phone,
        lastName: user.lastName,
      }
    });
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;

