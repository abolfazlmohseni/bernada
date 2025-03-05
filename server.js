const express = require('express');
const path = require('path'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// ایمپورت روت‌ها و مدل‌ها
const authRoutes = require('./my_project/routes/auth');
const scheduleRoutes = require('./my_project/routes/schedule');
const Schedule = require('./my_project/models/Schedule');
const User = require('./my_project/models/User');

// مقداردهی اولیه به Express
const app = express();

// استفاده از public directory برای فایل‌های static
app.use(express.static(path.join(__dirname, 'asset')));

// روت‌های مربوط به اپلیکیشن
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home', 'index.html'));
});

// سایر روت‌ها برای صفحات دیگر
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'Login&register', 'login.html'));
});
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

// اتصال به دیتابیس MongoDB
mongoose.connect( "mongodb://root:0c15ZMdwTKWV08Ddkmd6N6hf@planer-detabise:27017/my-app?authSource=admin")
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((error) => console.error('❌ MongoDB connection error:', error));

// تنظیم مسیرهای API
app.use('/api/auth', authRoutes);
app.use('/api/schedule', scheduleRoutes);

// مسیر اصلی برای بررسی سلامت سرور
app.get("/", (req, res) => {
    res.send("✅ Backend is running...");
});

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
