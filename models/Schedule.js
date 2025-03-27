//مدل برای ذخیره اطلاعات برنامه هفتگی کاربران
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  activity: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const scheduleSchema = new mongoose.Schema({
  userphon: {
    type: String,
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: false
  },
  educationLevel: {
    type: String,
    required: true
  },
  schedule: {
    type: [taskSchema],
    required: true
  }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
