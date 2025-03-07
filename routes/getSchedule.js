const express = require('express');
const Schedule = require('../models/Schedule');
const User = require('../models/User'); 
const router = express.Router();
router.get('/schedule/:userphon', async (req, res) => {
    const { userphon } = req.params;
    try {
        const user = await User.findOne({ numberPhone: userphon });
        if (!user) {
            
        }
        const userSchedule = await Schedule.findOne({ userphon: userphon })
            .sort({ _id: -1 });  

        if (!userSchedule) {
        
        }

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
     
    }
});

module.exports = router;
