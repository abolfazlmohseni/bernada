const express = require('express');
const Schedule = require('../models/Schedule');
const User = require('../models/User'); 
const router = express.Router();
// ارسال برنامه هفتگی کاربر
router.get('/schedule/:phone', async (req, res) => {
    const { phone } = req.params;
    try {
        const user = await User.findOne({ phone: phone });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const userSchedule = await Schedule.findOne({ phone: phone }).sort({ _id: -1 });

        if (!userSchedule) {
            return res.status(404).json({ message: "Schedule not found", schedule: [] });
        }

        res.status(200).json({
            message: 'Schedule retrieved successfully',
            schedule: userSchedule.schedule || [],  
            user: {
                name: user.name,
                phone: user.phone,
                lastName: user.lastName
            }
        });
    } catch (error) {
        console.error("Error fetching schedule:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
