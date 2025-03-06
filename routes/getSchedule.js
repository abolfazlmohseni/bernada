const express = require('express');
const Schedule = require('../models/Schedule');  // مدل برنامه درسی
const User = require('../models/User');  // مدل کاربر
const router = express.Router();

// روت دریافت آخرین برنامه درسی
router.get('/schedule/:userphon', async (req, res) => {
    const { userphon } = req.params;

    try {
        // بازیابی اطلاعات کاربر بر اساس شماره تلفن
        const user = await User.findOne({ numberPhone: userphon });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // بازیابی آخرین برنامه درسی کاربر
        const userSchedule = await Schedule.findOne({ userphon: userphon })
            .sort({ _id: -1 });  // مرتب‌سازی بر اساس تاریخ (جدیدترین اول)

        if (!userSchedule) {
            return res.status(404).json({ message: 'Schedule not found for this user' });
        }

        // ارسال اطلاعات برنامه درسی
        res.status(200).json({
            message: 'Schedule retrieved successfully',
            schedule: userSchedule,
            user: {
                username: user.username,
                numberPhone: user.numberPhone,
                lastName: user.lastName
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving schedule', error });
    }
});

module.exports = router;
