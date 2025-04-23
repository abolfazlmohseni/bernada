// گرفتن شماره کاربر از لوکال استورج
const phone = JSON.parse(localStorage.getItem('user')).phone ||"";
let scheduleData = { schedule: [] };
// دریافت برنامه کاربر از دیتابیس
const getUserSchedule = async (phone) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${phone}`);
        if (!response.ok) {
            console.log("erorr")
        }
        const data = await response.json();

        if (data && Array.isArray(data.schedule)) {
            scheduleData = data.schedule;
            showIncompleteSchedulesBeforeToday(getDayOfWeek());
        } else {
            console.error("Data does not contain a valid schedule array.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedule(phone);

const opartorashon = document.querySelector(".opartorashon");
// گرفتن برنامه های عقب افتاده تا امروز
const getIncompleteSchedulesBeforeToday = (todayDay) => {
    if (!Array.isArray(scheduleData)) {
        console.error("scheduleData is not an array.");
        return [];
    }

    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const todayIndex = daysOfWeek.indexOf(todayDay);
    const previousDays = daysOfWeek.slice(0, todayIndex);
  

    return scheduleData.filter(entry => {
        return previousDays.includes(entry.day) && entry.completed === false;
    });
};
// نمایش برنامه های عقب افتاده تا امروز
const showIncompleteSchedulesBeforeToday = (day) => {
    const previousSchedules = getIncompleteSchedulesBeforeToday(day);
  

    if (previousSchedules.length > 0) {
        previousSchedules.forEach(activity => {
            opartorashon.insertAdjacentHTML("beforeend", `
                <tr>
                    <td>${activity.day}</td>
                    <td>${activity.startTime}</td>
                    <td>${activity.endTime}</td>
                    <td>${activity.activity}</td>
                </tr>
            `);
        });
    } else {
        opartorashon.insertAdjacentHTML("beforeend", `
            <tr>
                <td colspan="4">تبریک هیچ کار عقب افتاده ای نداری</td>
            </tr>
        `);
    }
};
// گرفتن روز هفته
const getDayOfWeek = () => {
    const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
};
