


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');  // اینجا روت‌ها را وارد می‌کنیم

const app = express();

// استفاده از middleware ها
app.use(cors());
app.use(bodyParser.json());

// استفاده از روت‌ها
app.use('/api/auth', authRoutes);

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
