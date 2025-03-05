const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// ایمپورت روت‌ها و مدل‌ها
const authRoutes = require('./auth');
const scheduleRoutes = require('./schedule');
const Schedule = require('../models/Schedule');
const User = require('../models/User');

// مقداردهی اولیه به Express
const app = express();

// تنظیم CORS برای اجازه درخواست‌ها از دامنه اصلی
const corsOptions = {
    origin: ["https://itabolfazlmohseni.ir"], // فرانت اصلی
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
};
app.use(cors(corsOptions));

// تنظیمات پارس کردن داده‌ها
app.use(bodyParser.json({ limit: '10mb', encoding: 'utf-8' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// مسیرهای استاتیک CSS و JS
app.use(express.static(path.join(__dirname, '..', 'asset')));
app.use(express.static(path.join(__dirname, '..', 'asset')));

// مسیر پیش‌فرض برای نمایش صفحه لاگین
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'LoginRegister', 'login.html'));
});
// مسیرهای برای نمایش صفحات HTML

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'LoginRegister', 'login.html'));
});
app.get('/overview', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Dashboard', 'overviow','overview.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'LoginRegister', 'register.html'));
});

// اتصال به دیتابیس MongoDB
const mongoURI = process.env.DATABASE_URL || "mongodb://root:0c15ZMdwTKWV08Ddkmd6N6hf@planer-detabise:27017/my-app?authSource=admin";
mongoose.connect(mongoURI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((error) => console.error('❌ MongoDB connection error:', error));

// تنظیم مسیرهای API
app.use('/api/auth', authRoutes);
app.use('/api/schedule', scheduleRoutes);

// API برای ارسال برنامه درسی
app.post('/api/schedule', async (req, res) => {
    const { userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule } = req.body;

    try {
        // ایجاد و ذخیره برنامه درسی جدید
        const newSchedule = new Schedule({ userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule });
        const savedSchedule = await newSchedule.save();

        // پیدا کردن کاربر بر اساس شماره تلفن
        const user = await User.findOne({ numberPhone: userphon });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // ارسال پاسخ به کلاینت
        res.status(201).json({
            message: '✅ Schedule created successfully!',
            schedule: savedSchedule,
            user: {
                username: user.username,
                numberPhone: user.numberPhone,
                lastName: user.lastName
            }
        });
    } catch (error) {
        res.status(500).json({ message: '❌ Error creating schedule', error });
    }
});

// راه‌اندازی سرور
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
