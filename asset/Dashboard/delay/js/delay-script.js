const phoneNumber = JSON.parse(localStorage.getItem('user')).numberPhone;
let scheduleData = { schedule: [] };

const getUserSchedule = async (userphon) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${userphon}`);
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

getUserSchedule(phoneNumber);

const opartorashon = document.querySelector(".opartorashon");

const getIncompleteSchedulesBeforeToday = (todayDay) => {
    if (!Array.isArray(scheduleData)) {
        console.error("scheduleData is not an array.");
        return [];
    }

    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const todayIndex = daysOfWeek.indexOf(todayDay);
    const previousDays = daysOfWeek.slice(0, todayIndex);
    console.log('Previous Days:', previousDays);

    return scheduleData.filter(entry => {
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
                <td colspan="4">تبریک هیچ کار عقب افتاده ای نداری</td>
            </tr>
        `);
    }
};

const getDayOfWeek = () => {
    const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
};
