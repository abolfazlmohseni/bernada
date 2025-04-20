// روت برای ریست کردن وضعیت انجام برنامه ها در هر شنبه
const { Agenda } = require('agenda');
const mongoose = require('mongoose');
const Schedule = require('../models/Schedule');
const agenda = new Agenda({
    db: {
        address: 'mongodb://root:Js4HOwnkM8jOvjBNjORmXWM3@logan.liara.cloud:33428/my-app?authSource=admin',
        collection: 'schedules'
    }
});

agenda.on('ready', async () => {
    console.log('Agenda is ready!');


    agenda.define('reset completed field every saturday', async (job) => {
        console.log('Job is running...');
        try {
            // عملیات بروزرسانی برای هر شنبه
            const result = await Schedule.updateMany(
                { "schedule.completed": true },
                { $set: { "schedule.$[elem].completed": false } },
                { arrayFilters: [{ "elem.completed": true }] }
            );
            console.log('Updated tasks:', result);
        } catch (error) {
            console.error('Error updating tasks:', error);
        }
    });

    // شروع Agenda
    await agenda.start();

    // برنامه‌ریزی این کار برای اجرا هر شنبه در ساعت 12:00 صبح
    await agenda.every('0 0 * * 6', 'reset completed field every saturday'); // cron expression برای شنبه‌ها
});
