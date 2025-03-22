const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./auth');
const scheduleRoutes = require('./schedule');
const Schedule = require('../models/Schedule');
const User = require('../models/User');
const app = express();
const getScheduleRoutes = require('./getSchedule');
app.use('/api', getScheduleRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const taskRoutes = require("./task");
app.use("/task", taskRoutes);
const corsOptions = {
    origin: ["https://bernada.ir"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb', encoding: 'utf-8' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname, '..', 'asset')));
app.use(express.static(path.join(__dirname, '..', 'asset')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'landing', 'landing.html'));
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
})
app.get('/delay', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'delay', 'delay.html'))
})
app.get('/buildprogram', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'buildprogram', 'buildprogram.html'))
})
app.get("/allPlan", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Dashboard', 'allPlan', 'allPlan.html'))
})
const mongoURI = process.env.DATABASE_URL || "mongodb://root:0c15ZMdwTKWV08Ddkmd6N6hf@planer-detabise:27017/my-app?authSource=admin";
mongoose.connect(mongoURI)
    .then(() => console.log(' Connected to MongoDB'))
    .catch((error) => console.error(' MongoDB connection error:', error));
app.use('/api/auth', authRoutes);
app.use('/api/schedule', scheduleRoutes);
app.post('/api/schedule', async (req, res) => {
    const { userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule } = req.body;
    try {
        const newSchedule = new Schedule({ userphon, fieldOfStudy, educationLevel, studyHoursPerDay, schedule });
        const savedSchedule = await newSchedule.save();
        const user = await User.findOne({ numberPhone: userphon });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(201).json({
            message: ' Schedule created successfully!',
            schedule: savedSchedule,
            user: {
                username: user.username,
                numberPhone: user.numberPhone,
                lastName: user.lastName
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating schedule', error });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});
