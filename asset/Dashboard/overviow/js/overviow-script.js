//گرفتن اطلاعات کاربر از لوکال استورج
const phone = JSON.parse(localStorage.getItem('user')).phone;
const conteyner__right = document.querySelector(".conteyner__right-meddel");
let scheduleData = { schedule: [] };
// دریافت برنامه کاربر از دیتابیس
const getUserSchedule = async (phone) => {
    try {
        const response = await fetch(`http://localhost:3000/api/schedule/${phone}`);
        if (!response.ok) {
            console.log("error")
        }
        const data = await response.json();

        scheduleData = Array.isArray(data.schedule) ? { schedule: data.schedule } : { schedule: [] };

        showIncompleteScheduleForDay(getDayOfWeeks());
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedule(phone);
// گرفتن برنامه‌های ناتمام برای یک روز
const getIncompleteScheduleForDay = (day) => {
    return Array.isArray(scheduleData.schedule)
        ? scheduleData.schedule.filter(entry => entry.day === day && !entry.completed)
        : [];
};
// نمایش برنامه‌های ناتمام برای یک روز
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
            conteyner__right.insertAdjacentHTML("beforeend", `<p>کار های امروز انجام شده<p>`);
            conteyner__right.classList.add("null")
        }
    }


    document.querySelectorAll(".right-meddel__items").forEach(item => {
        item.addEventListener("click", () => {
            const taskId = item.getAttribute("data-id");
            const icon = item.querySelector(".bi");

            task(taskId, icon);
            item.querySelector(".bi").classList = "bi bi-check-square";
        });
    });
};
// گرفتن روز هفته
const getDayOfWeeks = () => {
    const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    const today = new Date();
    return daysOfWeek[today.getDay()];
};
// تغییر وضعیت یک تسک
function task(taskId, iconElement) {

    const isCompleted = iconElement.classList.contains("bi-check-square");

    fetch(`http://localhost:3000/task/update-status/${phone}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !isCompleted }) // وضعیت رو برعکس کن
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`خطا در درخواست: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // تغییر آیکون
            if (isCompleted) {
                iconElement.classList.remove("bi-check-square");
                iconElement.classList.add("bi-square");
            } else {
                iconElement.classList.remove("bi-square");
                iconElement.classList.add("bi-check-square");
            }


        })
        .catch(error => {
            console.error("خطا در ارسال درخواست:", error);
        });
}

// نمایش برنامه‌های ناتمام برای یک روز
let scheduleDatas = { schedule: [] };
// دریافت برنامه کاربر از دیتابیس
const getUserSchedulee = async (phone) => {
    try {
        const response = await fetch(`http://localhost:3000/api/schedule/${phone}`);
        if (!response.ok) {
            console.log("error")
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

getUserSchedulee(phone);

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
        conteyner__left.innerHTML = "";
        previousSchedules.forEach(activity => {
            conteyner__left.insertAdjacentHTML("beforeend", `
                <div class="left-meddel__items" data-id="${activity._id}">
                    <p class="kar">${activity.activity}</p>
                    <i class="bi bi-square"></i>
                </div>
            `);
        });

        // بعد از اضافه شدن عناصر، رویدادها را ثبت می‌کنیم
        document.querySelectorAll(".left-meddel__items").forEach(item => {
            item.addEventListener("click", () => {
                const taskId = item.getAttribute("data-id");
                const icon = item.querySelector(".bi");


                if (icon) {
                    task(taskId, icon);
                    icon.classList = "bi bi-check-square";
                }
            });
        });

    } else {
        conteyner__left.innerHTML = `<p>هیچ برنامه عقب افتاده ای نداری</p>`;
        conteyner__left.classList.add("null")
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
            conteyner__right.innerHTML = "";
            activities.forEach(activity => {
                conteyner__right.insertAdjacentHTML("beforeend", `
                    <div class="right-meddel__items" data-id="${activity._id}">
                        <p class="kar">${activity.activity}</p>
                        <i class="bi bi-square"></i>
                    </div>
                `);
            });

            // اینجا بعد از اضافه شدن، رویدادها را ثبت می‌کنیم
            document.querySelectorAll(".right-meddel__items").forEach(item => {
                item.addEventListener("click", () => {
                    const taskId = item.getAttribute("data-id");
                    let icon = item.querySelector(".bi");
                    task(taskId, icon);
                    icon.classList = "bi bi-check-square";
                });
            });
        } else {
            conteyner__right.insertAdjacentHTML("beforeend", `<p>هیچ برنامه‌ای برای امروز وجود ندارد.</p>`);
        }
    }
};

// گرفتن روز هفته
const getDayOfWeek = () => {
    const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    const today = new Date();
    return daysOfWeek[today.getDay()];
};
