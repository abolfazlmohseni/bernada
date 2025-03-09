const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, numberPhone, password } = req.body;

  try {
    // بررسی وجود کاربر با شماره تلفن
    const existingUser = await User.findOne({ numberPhone });
    if (existingUser) {
      // اگر کاربر قبلاً وجود داشته باشد، پیامی به کاربر ارسال کنید
      return res.status(400).json({ message: 'کاربر با این شماره تلفن قبلاً ثبت‌نام کرده است.' });
    }

    // رمز عبور را هش کنید
    const hashedPassword = await bcrypt.hash(password, 10);

    // کاربر جدید را ایجاد کنید
    const newUser = new User({
      username,
      numberPhone,
      password: hashedPassword,
    });

    // کاربر را ذخیره کنید
    await newUser.save();

    // ارسال پیام موفقیت
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

