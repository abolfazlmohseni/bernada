const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');  
const User = require('../models/User');

router.post('/schedule', async (req, res) => {
  const { userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule } = req.body;

  try {
    const existingSchedule = await Schedule.findOne({ userphon });

    if (existingSchedule) {
      existingSchedule.fieldOfStudy = fieldOfStudy;
      existingSchedule.educationLevel = educationLevel;
      existingSchedule.studyHoursPerDay = studyHoursPerDay;
      existingSchedule.schedule = schedule;
      const updatedSchedule = await existingSchedule.save();  
      const user = await User.findOne({ numberPhone: userphon });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

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
      const newSchedule = new Schedule({
        userphon,
        fieldOfStudy,
        educationLevel,
        studyHoursPerDay,
        schedule
      });

      const savedSchedule = await newSchedule.save();
      const user = await User.findOne({ numberPhone: userphon });
      if (!user) {
      }

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
  }
});

module.exports = router;
