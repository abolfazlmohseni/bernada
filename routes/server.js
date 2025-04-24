// تعریف سرور و اتصال به دیتابیس و ایجاد روت ها
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./auth');
const User = require('../models/User');
const agenda = require("./agenda");
const getScheduleRoutes = require('./getSchedule');
app.use('/api', getScheduleRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const taskRoutes = require("./task");
app.use("/task", taskRoutes);
const scheduleRoutes = require('./schedule');
app.use('/api/schedule', scheduleRoutes);
const userRoutes = require('./update');
app.use('/api/user', userRoutes);
const corsOptions = {
    origin: ["https://bernada.ir"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb', encoding: 'utf-8' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname, '..', 'asset')));
app.use('uploads', express.static(path.join(__dirname, 'asset', 'uploads')));
// ادرس فایل های استاتیک
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'landing', 'landing.html'));
});
app.get('/sitemap', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'landing', 'sitemap.xml'))
});
app.get('/aboutMe', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'landing', 'aboutMe.html'));
});
app.get('/link', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'landing', 'link.html'));
});
app.get('/guide', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'landing', 'guide.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'LoginRegister', 'login.html'));
});
app.get('/overview', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'overviow', 'overview.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'LoginRegister', 'register.html'));
});
app.get('/today', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'today', 'today.html'))
});
app.get('/delay', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'delay', 'delay.html'))
});
app.get('/buildprogram', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'buildprogram', 'buildprogram.html'))
});
app.get("/allPlan", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'allPlan', 'allPlan.html'))
});
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'profile', 'profile.html'))
})
// اتصال به دیتابیس
const mongoURI = process.env.DATABASE_URL || "mongodb://root:V4StxJKlbDzw2OcwJ9pixhlk@fitz-roy.liara.cloud:33687/my-app?authSource=admin";
mongoose.connect(mongoURI)
    .then(() => console.log(' Connected to MongoDB'))
    .catch((error) => console.error(' MongoDB connection error:', error));
// ایجاد روت
app.use('/api/auth', authRoutes);
// اجرای سرور
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});
