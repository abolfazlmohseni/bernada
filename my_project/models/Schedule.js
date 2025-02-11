const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  userphon: {
    type: String,  // تغییر از ObjectId به String
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  educationLevel: {
    type: String,
    required: true
  },
  studyHoursPerDay: {
    type: Number,
    required: true
  },
  schedule: {
    type: Array,
    required: true
  },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
