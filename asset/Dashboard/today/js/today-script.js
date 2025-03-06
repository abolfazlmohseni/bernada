const phoneNumber = JSON.parse(localStorage.getItem('user')).numberPhone;
let scheduleData = { schedule: { schedule: [] } };

const getUserSchedule = async (userphon) => {
    try {
        const response = await fetch(`http://localhost:3000/api/schedule/${userphon}`);
        if (!response.ok) {
            throw new Error("Error fetching schedule");
        }
        const data = await response.json();
       
        scheduleData = data.schedule; 
        showIncompleteScheduleForDay(getDayOfWeek());  // تغییر داده شده
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedule(phoneNumber);

const opartorashon = document.querySelector(".opartorashon");

// تغییرات: فیلتر کردن تسک‌های انجام نشده برای روز جاری
const getIncompleteScheduleForDay = (day) => {
    return scheduleData.schedule.filter(entry => entry.day === day && entry.completed === false);  // انجام نشده
};

const showIncompleteScheduleForDay = (day) => {
    const workDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"];
    if (workDays.includes(day)) {
        const activities = getIncompleteScheduleForDay(day);  // تغییر داده شده
        activities.forEach(activity => {
            if (activity != null) {
                opartorashon.insertAdjacentHTML("beforeend", `
                    <tr>
                        <td>${activity.day}</td>
                        <td>${activity.startTime}</td>
                        <td>${activity.endTime}</td>
                        <td>${activity.activity}</td>
            
                    </tr>
                `);
            }
        });
    } else {
        const tabel = document.querySelector("table");
        const bikari = document.querySelector(".bikari");
        tabel.style.display = "none";
        bikari.style.display = "block";
    }
};

const getDayOfWeek = () => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const today = new Date();
    const dayIndex = today.getDay(); 
    return daysOfWeek[dayIndex]; 
};
