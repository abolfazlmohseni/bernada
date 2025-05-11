//گرفتن شماره تلفن کاربر از لوکال استورج
const phone = JSON.parse(localStorage.getItem('user'))?.phone || logut();
async function logut() {
    swal("خطا!", "ابتدا وارد شوید", "error");
    window.location.href = "https://bernada.ir";
}
let scheduleData = { schedule: [] };
// دریافت برنامه کاربر از دیتابیس
const getUserSchedule = async (phone) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${phone}`);
        if (!response.ok) {
            throw new Error("Error fetching schedule");
        }
        const data = await response.json();

        scheduleData = Array.isArray(data.schedule) ? { schedule: data.schedule } : { schedule: [] };

        showIncompleteScheduleForDay(getDayOfWeek());
    } catch (error) {
        console.error("Error:", error);
    }
};
// بررسی شماره تلفن و در صورت معتبر بودن، دریافت برنامه کاربر
if (phone) {
    getUserSchedule(phone);
} else {
    console.error("شماره تلفن نامعتبر است.");
}
// انتخاب عناصر مورد استفاده
const opartorashon = document.querySelector(".opartorashon");
const tabel = document.querySelector("table");
const bikari = document.querySelector(".bikari");

const getIncompleteScheduleForDay = (day) => {
    return Array.isArray(scheduleData.schedule)
        ? scheduleData.schedule.filter(entry => entry.day === day && entry.completed === false)
        : [];
};
// نمایش برنامه‌های ناتمام برای یک روز
const showIncompleteScheduleForDay = (day) => {
    const workDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"];
    opartorashon.innerHTML = "";

    if (workDays.includes(day)) {
        const activities = getIncompleteScheduleForDay(day);

        if (activities.length > 0) {
            tabel.style.display = "table";
            bikari.style.display = "none";
            activities.forEach(activity => {
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
            tabel.style.display = "none";
            bikari.style.display = "block";
        }
    } else {
        tabel.style.display = "none";
        bikari.style.display = "block";
    }
};
// گرفتن روز هفته
const getDayOfWeek = () => {
    const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    const today = new Date();
    return daysOfWeek[today.getDay()];
};
