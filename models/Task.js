// مدل برای ذخیره اطلاعات فعالیت ها
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  activity: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed", "overdue"], default: "pending" } // وضعیت فعالیت
});

module.exports = mongoose.model("Task", TaskSchema);
