const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { // قبلاً: username
    type: String,
    required: true,
    trim: true,
  },
  phone: { // قبلاً: numberPhone
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: { // جدید
    type: String,
    default: '',
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: { // جدید
    type: String,
    default: '/imag/user6.jpg', // مسیر عکس پیش‌فرض
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
