const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');  // مدل برنامه درسی
const User = require('../models/User');  // مدل کاربر

// روت ارسال یا بروزرسانی برنامه درسی
router.post('/schedule', async (req, res) => {
  const { userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule } = req.body;

  try {
    // بررسی اینکه آیا برنامه‌ای برای این شماره تلفن موجود است یا نه
    const existingSchedule = await Schedule.findOne({ userphon });

    if (existingSchedule) {
      // اگر برنامه‌ای قبلاً موجود است، آن را به‌روزرسانی می‌کنیم
      existingSchedule.fieldOfStudy = fieldOfStudy;
      existingSchedule.educationLevel = educationLevel;
      existingSchedule.studyHoursPerDay = studyHoursPerDay;
      existingSchedule.schedule = schedule;

      const updatedSchedule = await existingSchedule.save();  // ذخیره تغییرات

      // بازیابی اطلاعات کاربر بر اساس شماره تلفن
      const user = await User.findOne({ numberPhone: userphon });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // ارسال اطلاعات به فرانت‌اند
      res.status(200).json({
        message: 'Schedule updated successfully!',
        schedule: updatedSchedule,
        user: {
          username: user.username,
          numberPhone: user.numberPhone,
          lastName: user.lastName
        }
      });
    } else {
      // اگر برنامه‌ای موجود نباشد، برنامه جدید ذخیره می‌کنیم
      const newSchedule = new Schedule({
        userphon,
        fieldOfStudy,
        educationLevel,
        studyHoursPerDay,
        schedule
      });

      const savedSchedule = await newSchedule.save();

      // بازیابی اطلاعات کاربر
      const user = await User.findOne({ numberPhone: userphon });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // ارسال اطلاعات به فرانت‌اند
      res.status(201).json({
        message: 'Schedule created successfully!',
        schedule: savedSchedule,
        user: {
          username: user.username,
          numberPhone: user.numberPhone,
          lastName: user.lastName
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error creating or updating schedule', error });
  }
});

module.exports = router;
