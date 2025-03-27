const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule");

//  تغییر وضعیت یک تسک خاص در برنامه درسی
router.put("/update-status/:userphon/:taskId", async (req, res) => {
  try {
    const { userphon, taskId } = req.params;
    const { completed } = req.body; 
  
    const schedule = await Schedule.findOne({ userphon });

    if (!schedule) {
      return res.status(404).json({ message: "برنامه درسی یافت نشد!" });
    
    }
    const task = schedule.schedule.id(taskId);
    if (!task) {
      return res.status(404).json({ message: "فعالیت موردنظر یافت نشد!" });

    }

    task.completed = completed;

    await schedule.save();

    res.json({ message: "وضعیت فعالیت با موفقیت بروزرسانی شد!", task });
 
  } catch (error) {
    console.log("خطا",error)
  }
});

module.exports = router;

