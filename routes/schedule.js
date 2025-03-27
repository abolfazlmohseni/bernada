const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');
const User = require('../models/User');
const { days_of_week } = require('./utils');  
// ایجاد برنامه جدید
router.post('/', async (req, res) => {
  const { userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule, currentDay } = req.body; 

  try {

    await Schedule.deleteMany({ userphon });

    const currentDayIndex = days_of_week.indexOf(currentDay); 

    const newSchedule = new Schedule({
      userphon,
      fieldOfStudy,
      educationLevel,
      studyHoursPerDay,
      schedule
    });

    newSchedule.schedule.forEach(task => {
      const taskDayIndex = days_of_week.indexOf(task.day); 

      if (taskDayIndex < currentDayIndex) {
        task.completed = true;
      } else if (taskDayIndex === currentDayIndex) {
        task.completed = false;
      }
    });

    const savedSchedule = await newSchedule.save();

    const user = await User.findOne({ numberPhone: userphon });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
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
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
