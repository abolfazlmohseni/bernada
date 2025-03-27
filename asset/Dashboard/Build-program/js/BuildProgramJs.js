import { studyPlan } from './ModulePlan.js' // ایمپورت داده‌های مربوط به برنامه درسی
let $ = document;
const dropdowns = document.querySelectorAll(".buildFrom > div");
// آبجکت برای ذخیره مقادیر انتخاب شده توسط کاربر
let selectedValues = {
    maghta: null,
    paye: null,
    teshte: null,
    hour: null,
    startTime: null
};
const payeData = {
    ebtedayi: ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم"],
    motevaseteOne: ["هفتم", "هشتم", "نهم"],
    motevaseteTwo: ["دهم", "یازدهم", "دوازدهم"]
};
const teshteData = {
    motevaseteTwo: ["ریاضی", "تجربی", "انسانی"]
};
dropdowns.forEach(dropdown => {
    const selectBox = dropdown.querySelector("div[class^='select']");
    const optionsContainer = dropdown.querySelector("div[class^='opshionCon']");
    const options = optionsContainer?.querySelectorAll("div");
    const valueBox = selectBox.querySelector("p");
    const icon = selectBox.querySelector(".icon");
    if (!selectBox || !optionsContainer) return;
    selectBox.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = optionsContainer.classList.contains("show");
        closeAllOptions();
        if (!isOpen) {
            optionsContainer.classList.add("show", "anime");
            icon.classList.add("rotate");
        }
    });
    if (options) {
        options.forEach(option => {
            option.addEventListener("click", function () {
                const category = dropdown.classList[0];
                valueBox.innerHTML = this.innerHTML;
                selectedValues[category] = this.dataset[category];
                optionsContainer.classList.remove("show", "anime");
                icon.classList.remove("rotate");
                if (category === "maghta") {
                    updatePayeOptions(selectedValues.maghta);
                    updateTeshteOptions(null);
                } else if (category === "paye") {
                    updateTeshteOptions(selectedValues.maghta);
                }
            });
        });
    }
});
document.addEventListener("click", function () {
    closeAllOptions();
});
function closeAllOptions() {
    document.querySelectorAll("div[class^='opshionCon']").forEach(container => {
        container.classList.remove("show", "anime");
    });
    document.querySelectorAll(".icon").forEach(icon => {
        icon.classList.remove("rotate");
    });
}
function updatePayeOptions(maghta) {
    const opshionConPaye = document.querySelector(".opshionCon-paye");
    const valuePaye = document.querySelector(".value-paye");
    opshionConPaye.innerHTML = "";
    valuePaye.innerHTML = "پایه تحصیلی";
    selectedValues.paye = null;
    if (!payeData[maghta]) return;
    let opshionConPayee = payeData[maghta].map(paye => `
        <div class="opshionCon-paye__item" data-paye="${paye}">
            <p>${paye}</p>
        </div>
    `).join("");
    opshionConPaye.insertAdjacentHTML("beforeend", opshionConPayee);
    document.querySelectorAll(".opshionCon-paye__item").forEach(item => {
        item.addEventListener("click", function () {
            valuePaye.innerHTML = this.innerHTML;
            selectedValues.paye = this.dataset.paye;
            opshionConPaye.classList.remove("show", "anime");
            updateTeshteOptions(selectedValues.maghta);
        });
    });
}
function updateTeshteOptions(maghta) {
    const opshionConTeshte = document.querySelector(".opshionCon-teshte");
    const valueTeshte = document.querySelector(".value-teshte");
    opshionConTeshte.innerHTML = "";
    valueTeshte.innerHTML = "رشته تحصیلی";
    selectedValues.teshte = null;
    if (!teshteData[maghta]) return;
    let opshionConTeshtee = teshteData[maghta].map(teshte => `
        <div class="opshionCon-teshte__item" data-teshte="${teshte}">
            <p>${teshte}</p>
        </div>
    `).join("");
    opshionConTeshte.insertAdjacentHTML("beforeend", opshionConTeshtee);
    document.querySelectorAll(".opshionCon-teshte__item").forEach(item => {
        item.addEventListener("click", function () {
            valueTeshte.innerHTML = this.innerHTML;
            selectedValues.teshte = this.dataset.teshte;
            opshionConTeshte.classList.remove("show", "anime");
        });
    });
}
document.querySelectorAll(".opshionCon-hour > div").forEach(item => {
    item.addEventListener("click", function () {
        const valueHour = document.querySelector(".value-hour");
        valueHour.innerHTML = this.innerHTML;
        selectedValues.hour = this.dataset.hour;
        document.querySelector(".opshionCon-hour").classList.remove("show", "anime");
    });

});
document.querySelectorAll(".opshionCon-start > div").forEach(item => {
    item.addEventListener("click", function () {
        const valueHour = document.querySelector(".value-start");
        valueHour.innerHTML = this.innerHTML;
        selectedValues.startTime = this.dataset.hour;
        document.querySelector(".opshionCon-start").classList.remove("show", "anime");

    });
});
const buildFromSubmit = document.querySelector('.buildFrom-submit');
buildFromSubmit.addEventListener('click', async function () {
    let userInfo = {
        userMaghta: selectedValues.maghta,
        userPaye: selectedValues.paye,
        userReshte: selectedValues.teshte,
        userTime: selectedValues.hour
    };
    let barnameuser = null;
    if (selectedValues.maghta === 'ebtedayi') {
        if (selectedValues.hour === 'two') {
            barnameuser = studyPlan.ebtedayi.twoH;
        } else if (selectedValues.hour === 'fuor') {
            barnameuser = studyPlan.ebtedayi.fourH;
        } else {
            barnameuser = studyPlan.ebtedayi.sixH;
        }
    } else if (selectedValues.maghta === 'motevaseteOne') {
        if (selectedValues.hour === 'two') {
            barnameuser = studyPlan.rahnamayi.twoH;
        } else if (selectedValues.hour === 'four') {
            barnameuser = studyPlan.rahnamayi.fourH;
        } else {
            barnameuser = studyPlan.rahnamayi.sixH;
        }
    } else if (selectedValues.maghta === 'motevaseteTwo') {
        if (selectedValues.reshte === 'انسانی') {
            if (selectedValues.hour === 'two') {
                barnameuser = studyPlan.motevaseteTwo.ensani.twoH;
            } else if (selectedValues.hour === 'four') {
                barnameuser = studyPlan.motevaseteTwo.ensani.fourH;
            } else {
                barnameuser = studyPlan.motevaseteTwo.ensani.sixH;
            }
        } else if (selectedValues.reshte === 'ریاضی') {
            if (selectedValues.hour === 'two') {
                barnameuser = studyPlan.motevaseteTwo.riyazi.twoH;
            } else if (selectedValues.hour === 'four') {
                barnameuser = studyPlan.motevaseteTwo.riyazi.fourH;
            } else {
                barnameuser = studyPlan.motevaseteTwo.riyazi.sixH;
            }
        } else {
            if (selectedValues.hour === 'two') {
                barnameuser = studyPlan.motevaseteTwo.tajrobi.twoH;
            } else if (selectedValues.hour === 'four') {
                barnameuser = studyPlan.motevaseteTwo.tajrobi.fourH;
            } else {
                barnameuser = studyPlan.motevaseteTwo.tajrobi.sixH;
            }
        }
    }
    // مپ کردن مقدار ورودی ساعت مطالعه به عدد صحیح
    const timeMap = {
        "two": 2,
        "four": 4,
        "six": 6
    };

    // استفاده از شیء برای تعیین زمان
    let time = timeMap[selectedValues.hour];
    console.log(time)
    // مپ کردن مقدار ورودی ساعت شروع به عدد صحیح
    const startMap = {
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fifteen": 15,
        "sixteen": 16,
        "seventeen": 17,
        "eighteen": 18,
        "nineteen": 19,
        "twenty": 20,
        "twentyone": 21,
        "twentytwo": 22,
        "twentythree": 23,
        "twentyfour": 24,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5
    };

    let startTime = startMap[selectedValues.startTime] || null;

    // تابعی برای تبدیل ساعت اعشاری به قالب استاندارد (مثلاً 13.5 به 13:30)
    function decimalToTime(decimal) {
        let hour = Math.floor(decimal) % 24;
        let minute = Math.round((decimal - Math.floor(decimal)) * 60);
        return { hour, minute };
    }

    // شروع پردازش
    let output = [];

    // گروه‌بندی فعالیت‌ها بر اساس روز
    let groupedActivities = barnameuser.reduce((acc, session) => {
        if (!acc[session.day]) acc[session.day] = [];
        acc[session.day].push(session);
        return acc;
    }, {});

    // پردازش برنامه برای هر روز
    Object.keys(groupedActivities).forEach(day => {
        let currentStartTime = startTime;

        groupedActivities[day].forEach(session => {
            let activityDuration = session.activityDuration;

            let currentEndTime = currentStartTime + activityDuration;

            let start = decimalToTime(currentStartTime);
            let end = decimalToTime(currentEndTime);

            // ذخیره فعالیت در آرایه خروجی
            output.push({
                day: day,
                startTime: `${start.hour}:${start.minute < 10 ? '0' + start.minute : start.minute}`,
                endTime: `${end.hour}:${end.minute < 10 ? '0' + end.minute : end.minute}`,
                activity: session.activity
            });

            currentStartTime = currentEndTime;
        });
    });

    console.log(output);

    const getDayOfWeeks = () => {
        const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
        const today = new Date();
        return daysOfWeek[today.getDay()];
    };

    const scheduleInfo = {
        userphon: JSON.parse(localStorage.getItem('user')).numberPhone,
        fieldOfStudy: selectedValues.teshte,
        educationLevel: selectedValues.maghta,
        schedule: output,
        currentDay: getDayOfWeeks(),
    };
    console.log(scheduleInfo);
    // ارسال برنامه کاربر به دیتابیس
    try {
        const response = await fetch('https://bernada.ir/api/schedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scheduleInfo),
        });
        if (response.ok) {
            const result = await response.json();
            await swal("ساخت برنامه", `${userinfo.username} برنامه درسی تو با موفقعیت ساخته شد`, "success", {
                button: "باشه",
            });
            window.location.href = "https://bernada.ir/allPlan";
        } else {
            const errorMessage = await response.text();
            swal("ساخت برنامه", `${userinfo.username} برنامه درسی تو با موفقعیت ساخته نشد دوباره تلاش کن`, "error", {
                button: "باشه",
            });
        }
    } catch (error) {
        swal("ساخت برنامه", `${userinfo.username} برنامه درسی تو با موفقعیت ساخته نشد دوباره تلاش کن`, "error", {
            button: "باشه",
        });
    }
});


// پاپ اپ راهنما
const popup = document.querySelector(".guide-popup")
const popup__bottomBTN = document.querySelector(".popup__bottom-BTN")

popup__bottomBTN.addEventListener("click", () => {
    popup.style.display = "none"
})


