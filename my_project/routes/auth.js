const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// ثبت‌نام کاربر

router.post('/register', async (req, res) => {
    const { username, lastName, numberPhone, maghta, reshteh, paye, password } = req.body;
  
    try {
      // بررسی می‌کنیم که آیا کاربر قبلاً ثبت‌نام کرده است یا خیر
      const userExists = await User.findOne({ numberPhone });
      if (userExists) {
        return res.status(400).send('User with this phone number already exists');
      }
  
      // رمز عبور را هش می‌کنیم
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // ایجاد کاربر جدید
      const newUser = new User({ 
        username, 
        lastName, 
        numberPhone, 
        maghta, 
        reshteh, 
        paye, 
        password: hashedPassword 
      });
      
      await newUser.save();
      res.status(201).send('User registered successfully');
    } catch (error) {
      console.error('Error during registration:', error); // چاپ خطای دقیق در کنسول
      res.status(500).send('Server error');
    }
  });

// ورود کاربر
router.post('/login', async (req, res) => {
    const { numberPhone, password } = req.body;
  
    try {
      const user = await User.findOne({ numberPhone });
      if (!user) {
        return res.status(400).send('User not found');
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Invalid credentials');
      }

      console.log("User logged in successfully:");
      console.log("Name:", user.username);
      console.log("Last Name:", user.lastName);
      console.log("Phone Number:", user.numberPhone);
      console.log("Password:", user.password);  // توجه داشته باشید که در محیط واقعی نباید رمز عبور را نمایش دهید.
  
      res.status(200).send('Login successful');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
});

module.exports = router;
