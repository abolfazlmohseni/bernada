const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  lastName: { type: String, required: true },
  numberPhone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // حذف فیلد email یا آن را غیرفعال کنید
});

const User = mongoose.model('User', userSchema);

module.exports = User;

