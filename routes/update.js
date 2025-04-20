const express = require('express');
const router = express.Router();
const User = require('../models/User'); // مدل کاربر شما
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// تنظیمات multer برای آپلود عکس
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // مسیر صحیح پوشه داخل دایرکتوری asset
    const dir = path.join(__dirname, '..', 'asset', 'uploads', 'profiles'); 
    // چک کردن اینکه مسیر ذخیره سازی وجود دارد یا نه
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // ایجاد دایرکتوری در صورت عدم وجود
    }
    cb(null, dir); // مسیر ذخیره عکس‌ها
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // پسوند فایل
    cb(null, Date.now() + ext); // استفاده از timestamp به عنوان نام فایل
  }
});

const upload = multer({ storage: storage });

// روت برای دریافت پروفایل کاربر با شماره تلفن
router.get('/profile/:phone', async (req, res) => {
  const { phone } = req.params;
  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // ارسال اطلاعات کاربر
    res.json({
      name: user.name,
      phone: user.phone,
      email: user.email,
      image: user.image, // ارسال مسیر عکس
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// روت برای ویرایش پروفایل کاربر (نام، ایمیل، عکس)
router.put('/profile/:phone', upload.single('profilePic'), async (req, res) => {
  const { phone } = req.params;
  const { name, email } = req.body;
  const image = req.file ? '/uploads/profiles/' + req.file.filename : null;

  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // به‌روزرسانی اطلاعات کاربر
    user.name = name || user.name;
    user.email = email || user.email;
    user.image = image || user.image;

    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
