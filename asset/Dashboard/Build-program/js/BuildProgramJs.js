import { studyPlan } from './ModulePlan.js'
let $ = document;
const userReshte = $.querySelector(".userReshte");
const userMaghta = $.querySelector(".userMaghta");
const userPaye = $.querySelector(".userPaye");
const reshteh = $.querySelector("#reshteh");
const planerForm = $.querySelector(".planerForm");
const userTime = $.querySelector(".userTime");
// پایه ها
// پایه ها
let ebtedayi = [
    'اول',
    'دوم',
    'سوم',
    'چهارم',
    'پنجم',
    'ششم',
]

let motevaseteOne = [
    'هفتم',
    'هشتم',
    'نهم'
]

let motevaseteTwo = [
    'دهم',
    'یازدهم',
    'دوازدهم'
]
let reshteha = [
    'انسانی',
    'تجربی',
    'ریاضی'
]
userMaghta.addEventListener('change', function () {
    if (userMaghta.value == 'ebtedayi') {
        reshteh.style.display = "none";
        userPaye.innerHTML = '';
        let htmlopshon = `
          <option>${ebtedayi[0]}</option>
          <option>${ebtedayi[1]}</option>
          <option>${ebtedayi[2]}</option>
          <option>${ebtedayi[3]}</option>
          <option>${ebtedayi[4]}</option>
          <option>${ebtedayi[5]}</option>
          `;
        userPaye.insertAdjacentHTML("beforeend", htmlopshon);
    } else if (userMaghta.value == 'motevaseteOne') {
        reshteh.style.display = "none";
        userPaye.innerHTML = '';
        let htmlopshon = `
          <option>${motevaseteOne[0]}</option>
          <option>${motevaseteOne[1]}</option>
          <option>${motevaseteOne[2]}</option>
          `;
        userPaye.insertAdjacentHTML("beforeend", htmlopshon);
    } else {
        reshteh.style.display = "block";
        reshteh.innerHTML = '';
        userPaye.innerHTML = '';

        let reshtehopshon = `
          <option>${reshteha[0]}</option>
          <option>${reshteha[1]}</option>
          <option>${reshteha[2]}</option>
          `;

        let htmlopshon = `
          <option>${motevaseteTwo[0]}</option>
          <option>${motevaseteTwo[1]}</option>
          <option>${motevaseteTwo[2]}</option>
          `;
        userPaye.insertAdjacentHTML("beforeend", htmlopshon);
        reshteh.insertAdjacentHTML("beforeend", reshtehopshon);

    };
});








planerForm.addEventListener("submit", async function (event) {
    event.preventDefault()
    let userInfoLearn = {
        userPaye: userPaye.value,
        userMaghta: userMaghta.value,
        userReshte: userReshte.value,
        userTime: userTime.value
    }
    console.log(userInfoLearn)




    let barnameuser = null;



    if (userMaghta.value == 'ebtedayi') {
        if (userTime.value == 'twoH') {
            barnameuser = studyPlan.ebtedayi.twoH
        } else if (userTime.value == 'fourH') {
            barnameuser = studyPlan.ebtedayi.fourH
        } else {
            barnameuser = studyPlan.ebtedayi.sixH
        }
    } else if (userMaghta.value == 'motevaseteOne') {
        if (userTime.value == 'twoH') {
            barnameuser = studyPlan.rahnamayi.twoH
        } else if (userTime.value == 'fourH') {
            barnameuser = studyPlan.rahnamayi.fourH
        } else {
            barnameuser = studyPlan.rahnamayi.sixH
        }
    } else if (userMaghta.value == 'motevaseteTwo') {
        if (userReshte.value == "انسانی") {
            if (userTime.value == 'twoH') {
                barnameuser = studyPlan.motevaseteTwo.ensani.twoH
            } else if (userTime.value == 'fourH') {
                barnameuser = studyPlan.motevaseteTwo.ensani.fourH
            } else {
                barnameuser = studyPlan.motevaseteTwo.ensani.sixH
            }
        } else if (userReshte.value == 'ریاضی') {
            if (userTime.value == 'twoH') {
                barnameuser = studyPlan.motevaseteTwo.riyazi.twoH
            } else if (userTime.value == 'fourH') {
                barnameuser = studyPlan.motevaseteTwo.riyazi.fourH
            } else {
                barnameuser = studyPlan.motevaseteTwo.riyazi.sixH
            }
        } else {
            if (userTime.value == 'twoH') {
                barnameuser = studyPlan.motevaseteTwo.tajrobi.twoH
            } else if (userTime.value == 'fourH') {
                barnameuser = studyPlan.motevaseteTwo.tajrobi.fourH
            } else {
                barnameuser = studyPlan.motevaseteTwo.tajrobi.sixH
            }
        }
    }


    let time = null;
    if (userTime.value == "twoH") {
        time = 2
    } else if (userTime.value == "fourH") {
        time = 4
    } else {
        time = 6
    }


    const scheduleInfo = {
        userphon: JSON.parse(localStorage.getItem('user')).numberPhone,
        fieldOfStudy: userReshte.value,
        educationLevel: userMaghta.value,
        studyHoursPerDay: time,
        schedule: barnameuser
    };
    try {
        const response = await fetch('http://localhost:5000/api/schedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scheduleInfo),
        });


        if (response.ok) {
            const result = await response.json();
            console.log('Schedule created successfully:', result.schedule);
            console.log('User Info:', result.user);  // نمایش اطلاعات کاربر
            alert('Schedule created successfully!');
        } else {
            const errorMessage = await response.text();
            alert(`Failed to create schedule: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error during schedule creation:', error);
        alert('Failed to create schedule!');
    }
    console.log(scheduleInfo)
})

