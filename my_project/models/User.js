const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false
  },
  numberPhone: {
    type: String,
    required: true,
    unique: true,  // شماره تلفن باید یکتا باشد
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
