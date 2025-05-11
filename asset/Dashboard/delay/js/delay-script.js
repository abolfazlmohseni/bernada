// گرفتن شماره کاربر از لوکال استورج
const phone = JSON.parse(localStorage.getItem('user')).phone || logut();
async function logut() {
    swal("خطا!", "ابتدا وارد شوید", "error");
    window.location.href = "https://bernada.ir";
}

let scheduleData = { schedule: [] };

// گرفتن برنامه کاربر از دیتابیس
const getUserSchedule = async (phone) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${phone}`);
        if (!response.ok) {
            console.log("error");
        }
        const data = await response.json();

        if (data && Array.isArray(data.schedule)) {
            scheduleData = data.schedule;

            generateFridaySchedule(scheduleData, getDayOfWeek());
        } else {
            console.error("Data does not contain a valid schedule array.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedule(phone);

// گرفتن روز هفته
const getDayOfWeek = () => {
    const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
};

// گرفتن برنامه‌های عقب‌افتاده تا امروز
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



// محاسبه مدت زمان یک کار بر حسب ساعت
function getDurationInHours(start, end) {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    return (eh + em / 60) - (sh + sm / 60);
}

// گرفتن ساعت شروع کلی از اولین کار
function getGlobalStartTime(schedule) {
    if (!Array.isArray(schedule) || schedule.length === 0) return 8; // اگر هیچ کار وجود نداشت، ساعت شروع را 8 در نظر می‌گیریم
    const validTimes = schedule
        .map(task => task.startTime)
        .filter(Boolean)
        .map(time => parseInt(time.split(":")[0])); // گرفتن فقط ساعت شروع هر کار
    return validTimes.length ? Math.min(...validTimes) : 8; // کمترین ساعت شروع را انتخاب می‌کنیم
}

// تولید برنامه روز جمعه بر اساس کارهای عقب افتاده
function generateFridaySchedule(schedule, todayDay) {
    const backlogTasks = getIncompleteSchedulesBeforeToday(todayDay);
    if (backlogTasks.length === 0) return;

    const fridayTasks = [];
    let currentHour = getGlobalStartTime(schedule); // استفاده از ساعت شروع اولین کار

    backlogTasks.forEach(task => {
        const duration = getDurationInHours(task.startTime, task.endTime);
        const startTime = `${String(Math.floor(currentHour)).padStart(2, '0')}:${String(Math.round((currentHour % 1) * 60)).padStart(2, '0')}`;
        const endHour = currentHour + duration;
        const endTime = `${String(Math.floor(endHour)).padStart(2, '0')}:${String(Math.round((endHour % 1) * 60)).padStart(2, '0')}`;

        fridayTasks.push({
            ...task,
            day: "جمعه",
            startTime,
            endTime,
        });

        currentHour += duration;
    });

    // نمایش یا ذخیره برنامه جمعه
    console.log("برنامه روز جمعه:", fridayTasks);
    const opartorashon = document.querySelector(".opartorashon");
    if (fridayTasks.length != 0) {
        fridayTasks.forEach(task => {
            opartorashon.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${task.day}</td>
                <td>${task.startTime}</td>
                <td>${task.endTime}</td>
                <td>${task.activity}</td>
            </tr>
        `);
        })
    } else {
        opartorashon.insertAdjacentHTML("beforeend", `
            <tr>
                <td colspan="4">تبریک هیچ کار عقب افتاده ای نداری</td>
            </tr>
        `);
    }


}



