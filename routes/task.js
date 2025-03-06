const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule");

// ✅ تغییر وضعیت یک تسک خاص در برنامه درسی
router.put("/update-status/:userphon/:taskId", async (req, res) => {
  try {
    const { userphon, taskId } = req.params;
    const { completed } = req.body; // مقدار جدید از فرانت میاد

    // پیدا کردن برنامه درسی کاربر
    const schedule = await Schedule.findOne({ userphon });

    if (!schedule) {
      return res.status(404).json({ message: "برنامه درسی یافت نشد!" });
    }

    // پیدا کردن تسک موردنظر در آرایه schedule
    const task = schedule.schedule.id(taskId);
    if (!task) {
      return res.status(404).json({ message: "فعالیت موردنظر یافت نشد!" });
    }

    // تغییر وضعیت تسک
    task.completed = completed;

    // ذخیره تغییرات
    await schedule.save();

    res.json({ message: "وضعیت فعالیت با موفقیت بروزرسانی شد!", task });
  } catch (error) {
    // res.status(500).json({ message: "خطا در بروزرسانی وضعیت!", error });
    console.log("خطا",error)
  }
});

module.exports = router;
