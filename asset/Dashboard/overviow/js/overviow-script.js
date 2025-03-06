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

const conteyner__right = document.querySelector(".conteyner__right-meddel");

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
    // تغییر وضعیت تسک به انجام شده (مثال)
  
        fetch(`http://localhost:3000/task/update-status/${phoneNumber}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',  // مشخص می‌کنیم که داده‌ها به صورت JSON هستند
          },
          body: JSON.stringify({ completed: true })  // ارسال داده `completed`
        })
        .then(response => response.json())
        .then(data => {
          console.log("Response:", data);
        })
        .catch(error => {
          console.error("خطا در ارسال درخواست:", error);
        });
}






