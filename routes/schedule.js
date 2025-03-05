const express = require('express');
const Schedule = require('../models/Schedule');  // مدل برنامه درسی
const User = require('../models/User');  // مدل کاربر
const router = express.Router();

// روت ارسال برنامه درسی
router.post('/schedule', async (req, res) => {
  const { userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule } = req.body;

  try {
    // ذخیره کردن برنامه درسی جدید در دیتابیس
    const newSchedule = new Schedule({
      userphon,
      fieldOfStudy,
      educationLevel,
      studyHoursPerDay,
      schedule
    });

    const savedSchedule = await newSchedule.save();

    // بازیابی اطلاعات کاربر بر اساس شماره تلفن
    const user = await User.findOne({ numberPhone: userphon });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // ارسال اطلاعات ذخیره‌شده به فرانت‌اند
    res.status(201).json({
      message: 'Schedule created successfully!',
      schedule: savedSchedule,
      user: {
        username: user.username,
        numberPhone: user.numberPhone,
        lastName: user.lastName
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating schedule', error });
  }
});

module.exports = router;
