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
        showIncompleteScheduleForDay(getDayOfWeek());
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedule(phoneNumber);

const conteyner__right = document.querySelector(".conteyner__right-meddel");
const getIncompleteScheduleForDay = (day) => {
    return scheduleData.schedule.filter(entry => entry.day === day && entry.completed === false); 
};

const showIncompleteScheduleForDay = (day) => {
    const workDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"];
    if (workDays.includes(day)) {
        const activities = getIncompleteScheduleForDay(day); 
        activities.forEach(activity => {
            if (activity != null) {
                conteyner__right.insertAdjacentHTML("beforeend", `
                  <div class="right-meddel__items" data-id="${activity._id}">
                            <p class="kar">${activity.activity}</p>
                            <i class="bi bi-square"></i>
                        </div>
                `);
            }
        });
    } else {
        conteyner__right.insertAdjacentHTML("beforeend", `<p>کاری نیستش!!</p>`)
    }
    const allitem = document.querySelectorAll(".right-meddel__items")
    allitem.forEach(item => {
        item.addEventListener("click", () => {
            const taskId = item.getAttribute("data-id")
            task(taskId)
            var icon = item.querySelector(".bi")
            icon.classList = "bi bi-check-square"
        })
    })
};

const getDayOfWeek = () => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
};
function task(id) {

    fetch(`https://itabolfazlmohseni.ir/task/update-status/${phoneNumber}/${id}`, {
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
// دریافت کار های عقب افتاده

let scheduleDatas = { schedule: { schedule: [] } };

const getUserSchedulee = async (userphon) => {
    try {
        const response = await fetch(`https://itabolfazlmohseni.ir/api/schedule/${userphon}`);
        if (!response.ok) {
            throw new Error("Error fetching schedule");
        }
        const data = await response.json();
        scheduleDatas = data.schedule;
        showIncompleteSchedulesBeforeToday(getDayOfWeek());  
        showIncompleteScheduleForDayi(getDayOfWeeks()); 
    } catch (error) {
        console.error("Error:", error);
    }
};

getUserSchedulee(phoneNumber);

const conteyner__left = document.querySelector(".conteyner__left-meddel");

const getIncompleteSchedulesBeforeToday = (todayDay) => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const todayIndex = daysOfWeek.indexOf(todayDay);
    const previousDays = daysOfWeek.slice(0, todayIndex);
    return scheduleDatas.schedule.filter(entry => previousDays.includes(entry.day) && entry.completed === false); 
};

const showIncompleteSchedulesBeforeToday = (day) => {
    const previousSchedules = getIncompleteSchedulesBeforeToday(day);  
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
    return scheduleData.schedule.filter(entry => entry.day === day && entry.completed === false);  
};

const showIncompleteScheduleForDayi = (day) => {
    const workDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"];
    if (workDays.includes(day)) {
        const activities = getIncompleteScheduleForDayi(day);  
        activities.forEach(activity => {
            if (activity != null) {
                conteyner__right.insertAdjacentHTML("beforeend", `
                    <div class="right-meddel__items" data-id="${activity._id}">
                        <p class="kar">${activity.activity}</p>
                        <i class="bi bi-square"></i>
                    </div>
                `);
            }
        });
    } else {
        conteyner__left.insertAdjacentHTML("beforeend", `<p>کاری نیستش!!</p>`);
    }
    const allitem = document.querySelectorAll(".left-meddel__items");
    allitem.forEach(item => {
        item.addEventListener("click", () => {
            const taskId = item.getAttribute("data-id");
            task(taskId);
            var icon = item.querySelector(".bi")
            icon.classList = "bi bi-check-square"
        });
    });
};

const getDayOfWeeks = () => {
    const daysOfWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
};
