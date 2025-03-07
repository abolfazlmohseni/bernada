const phoneNumber = JSON.parse(localStorage.getItem('user')).numberPhone;
let scheduleData = { schedule: { schedule: [] } };
const getUserSchedule = async (userphon) => {
    try {
        const response = await fetch(`https://itabolfazlmohseni.ir/api/schedule/${userphon}`);
        if (!response.ok) {
            throw new Error("Error fetching schedule");
        }
        const data = await response.json();
        scheduleData = data.schedule;
        showIncompleteSchedulesBeforeToday(getDayOfWeek()); 
    } catch (error) {
        console.error("Error:", error);
    }
};
getUserSchedule(phoneNumber);
const opartorashon = document.querySelector(".opartorashon");

const getIncompleteSchedulesBeforeToday = (todayDay) => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const todayIndex = daysOfWeek.indexOf(todayDay);
    const previousDays = daysOfWeek.slice(0, todayIndex);
    console.log('Previous Days:', previousDays);
    return scheduleData.schedule.filter(entry => {
        console.log('Checking entry:', entry); 
        return previousDays.includes(entry.day) && entry.completed === false; 
    });
};
const showIncompleteSchedulesBeforeToday = (day) => {
    const previousSchedules = getIncompleteSchedulesBeforeToday(day);  
    console.log('Filtered Schedules:', previousSchedules);
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
                <td colspan="4">هیچ برنامه‌ای برای روزهای قبل از امروز وجود ندارد.</td>
            </tr>
        `);
    }
};
const getDayOfWeek = () => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const today = new Date();
    const dayIndex = today.getDay(); 
    console.log('Today is:', daysOfWeek[dayIndex]);
    return daysOfWeek[dayIndex];
};
