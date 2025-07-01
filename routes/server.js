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
    origin: ["http://localhost:3000"],
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

// ایجاد روت
app.use('/api/auth', authRoutes);

// اتصال به دیتابیس
async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://abolfazl:12135811228@cluster0.ppfdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ Could not connect to MongoDB. Continuing without DB...");
        // اینجا هم کاری نمی‌کنیم تا برنامه نخوابه
    }
}
connectToMongo();
// اجرای سرور
const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT || PORT, () => {
    console.log("🚀 Server is running");
});