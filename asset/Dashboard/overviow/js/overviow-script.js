const phoneNumber = JSON.parse(localStorage.getItem('user')).numberPhone;
const conteyner__right = document.querySelector(".conteyner__right-meddel");
let scheduleData = { schedule: [] };

const getUserSchedule = async (userphon) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${userphon}`);
        if (!response.ok) {
            throw new Error("Error fetching schedule");
        }
        const data = await response.json();

        scheduleData = Array.isArray(data.schedule) ? { schedule: data.schedule } : { schedule: [] };

        showIncompleteScheduleForDay(getDayOfWeeks());
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedule(phoneNumber);

const getIncompleteScheduleForDay = (day) => {
    return Array.isArray(scheduleData.schedule)
        ? scheduleData.schedule.filter(entry => entry.day === day && !entry.completed)
        : [];
};

const showIncompleteScheduleForDay = (day) => {
    const workDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"];
    conteyner__right.innerHTML = "";

    if (workDays.includes(day)) {
        const activities = getIncompleteScheduleForDay(day);

        if (activities.length > 0) {
            activities.forEach(activity => {
                const existingItem = conteyner__right.querySelector(`[data-id="${activity._id}"]`);
                if (!existingItem) {
                    conteyner__right.insertAdjacentHTML("beforeend", `
                        <div class="right-meddel__items" data-id="${activity._id}">
                            <p class="kar">${activity.activity}</p>
                            <i class="bi bi-square"></i>
                        </div>
                    `);
                }
            });
        } else {
            conteyner__right.insertAdjacentHTML("beforeend", `<p>کاری نیستش!!</p>`);
        }
    }


    document.querySelectorAll(".right-meddel__items").forEach(item => {
        item.addEventListener("click", () => {
            const taskId = item.getAttribute("data-id");
            task(taskId);
            item.querySelector(".bi").classList = "bi bi-check-square";
        });
    });
};


const getDayOfWeeks = () => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
};

function task(id) {

    fetch(`https://bernada.ir/task/update-status/${phoneNumber}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: true })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response:", data);
        })
        .catch(error => {
            console.error("خطا در ارسال درخواست:", error);
        });
}
let scheduleDatas = { schedule: [] };

const getUserSchedulee = async (userphon) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${userphon}`);
        if (!response.ok) {
            throw new Error("Error fetching schedule");
        }
        const data = await response.json();
        if (data.schedule) {
            scheduleDatas = data.schedule;
            showIncompleteSchedulesBeforeToday(getDayOfWeek());

        } else {
            console.error("No schedule found for the user");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedulee(phoneNumber);

const conteyner__left = document.querySelector(".conteyner__left-meddel");

const getIncompleteSchedulesBeforeToday = (todayDay) => {
    if (!scheduleDatas || !scheduleDatas.length) {
        console.error("scheduleDatas is empty or undefined");
        return [];
    }

    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const todayIndex = daysOfWeek.indexOf(todayDay);
    const previousDays = daysOfWeek.slice(0, todayIndex);

    return scheduleDatas.filter(entry => previousDays.includes(entry.day) && entry.completed === false);
};


const showIncompleteSchedulesBeforeToday = (day) => {
    const previousSchedules = getIncompleteSchedulesBeforeToday(day);
    conteyner__left.innerHTML = "";

    if (previousSchedules.length > 0) {
        previousSchedules.forEach(activity => {
            conteyner__left.insertAdjacentHTML("beforeend", `
                <div class="left-meddel__items" data-id="${activity._id}">
                    <p class="kar">${activity.activity}</p>
                    <i class="bi bi-square"></i>
                </div>
            `);
        });
    } else {
        conteyner__left.insertAdjacentHTML("beforeend", `<p>هیچ برنامه‌ای برای روزهای قبل از امروز وجود ندارد.</p>`);
    }
};

const getIncompleteScheduleForDayi = (day) => {
    return scheduleDatas.filter(entry => entry.day === day && entry.completed === false);
};

const showIncompleteScheduleForDayi = (day) => {
    const workDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"];
    conteyner__right.innerHTML = "";

    if (workDays.includes(day)) {
        const activities = getIncompleteScheduleForDayi(day);
        if (activities.length > 0) {
            activities.forEach(activity => {
                conteyner__right.insertAdjacentHTML("beforeend", `
                    <div class="right-meddel__items" data-id="${activity._id}">
                        <p class="kar">${activity.activity}</p>
                        <i class="bi bi-square"></i>
                    </div>
                `);
            });
        } else {
            conteyner__right.insertAdjacentHTML("beforeend", `<p>هیچ برنامه‌ای برای امروز وجود ندارد.</p>`);
        }
    }

    document.querySelectorAll(".right-meddel__items").forEach(item => {
        item.addEventListener("click", () => {
            const taskId = item.getAttribute("data-id");
            task(taskId);
            var icon = item.querySelector(".bi");
            icon.classList = "bi bi-check-square";
        });
    });
};


const getDayOfWeek = () => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
};
