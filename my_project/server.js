const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');  // روت‌های احراز هویت
const scheduleRoutes = require('./routes/schedule'); // روت برنامه درسی
const Schedule = require('./models/Schedule'); // مدل برنامه درسی
const User = require('./models/User'); // مدل کاربر

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb', encoding: 'utf-8' }));  // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));  // Handle URL-encoded data

// Use routes
app.use('/api/auth', authRoutes);  // روت‌های احراز هویت
app.use('/api', scheduleRoutes); // روت برنامه درسی

// API برای ارسال برنامه درسی
app.post('/api/schedule', async (req, res) => {
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
        
        // ذخیره‌سازی برنامه درسی
        const savedSchedule = await newSchedule.save();

        // بازیابی اطلاعات کاربر بر اساس شماره تلفن
        const user = await User.findOne({ numberPhone: userphon });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // ارسال اطلاعات ذخیره‌شده به فرانت‌اند
        res.status(201).json({
            message: 'Schedule created successfully!',
            schedule: savedSchedule,  // برنامه درسی ذخیره‌شده
            user: {  // اطلاعات کاربر
                username: user.username,
                numberPhone: user.numberPhone,
                lastName: user.lastName
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating schedule', error });
    }
});

// پورت سرور
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// اتصال به MongoDB
mongoose.connect('mongodb+srv://abolfazl:12135811228@cluster0.ppfdw.mongodb.net/curriculum_planner?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
