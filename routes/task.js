const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule");

router.put("/update-status/:userphon/:taskId", async (req, res) => {
  try {
    const { userphon, taskId } = req.params;
    const { completed } = req.body; 

    const schedule = await Schedule.findOne({ userphon });

    if (!schedule) {
    
    }

    const task = schedule.schedule.id(taskId);
    if (!task) {

    }

    task.completed = completed;

    await schedule.save();

 
  } catch (error) {


  }
});

module.exports = router;
