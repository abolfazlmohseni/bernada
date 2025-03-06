import { studyPlan } from './ModulePlan.js'
let $ = document;



const dropdowns = document.querySelectorAll(".buildFrom > div");
let selectedValues = {
    maghta: null,
    paye: null,
    teshte: null,
    hour: null
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
                const category = dropdown.classList[0]; // مثلا "maghta", "paye", "hour"
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

// ** تنظیم رویداد کلیک برای گزینه‌های ساعت (بدون حذف شدن) **
document.querySelectorAll(".opshionCon-hour > div").forEach(item => {
    item.addEventListener("click", function () {
        const valueHour = document.querySelector(".value-hour");
        valueHour.innerHTML = this.innerHTML;
        selectedValues.hour = this.dataset.hour;
        document.querySelector(".opshionCon-hour").classList.remove("show", "anime");

    
    });

});

const buildFromSubmit = document.querySelector('.buildFrom-submit');

buildFromSubmit.addEventListener('click', async function () {
    let userInfo = {
        userMaghta: selectedValues.maghta,  // مقطع
        userPaye: selectedValues.paye,      // پایه
        userReshte: selectedValues.teshte,  // رشته
        userTime: selectedValues.hour       // ساعت
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

    let time = null;
    if (selectedValues.hour === "two") {
        time = 2;
    } else if (selectedValues.hour === "four") {
        time = 4;
    } else {
        time = 6;
    }

    const scheduleInfo = {
        userphon: JSON.parse(localStorage.getItem('user')).numberPhone,
        fieldOfStudy: selectedValues.teshte,
        educationLevel: selectedValues.maghta,
        studyHoursPerDay: time,
        schedule: barnameuser
    };

    try {
        const response = await fetch('http://localhost:3000/api/schedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scheduleInfo),
        });

        if (response.ok) {
            const result = await response.json();
            swal("ساخت برنامه", `${userinfo.username} برنامه درسی تو با موفقعیت ساخته شد`, "success", {
                button: "باشه",
              });
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





