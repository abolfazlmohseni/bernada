let $ = document;
const userMaghta = $.querySelector(".userMaghta");
const userPaye = $.querySelector(".userPaye");
const reshteh = $.querySelector("#reshteh");
const formRegister = $.querySelector("form");
const userName = $.querySelector(".userName");
const userLastName = $.querySelector(".userLastName");
const userNumberPhone = $.querySelector(".userNumberPhone");
const userReshte = $.querySelector(".userReshte");
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
// عملیات ثبت نام
formRegister.addEventListener("submit", event => {
    event.preventDefault();
    let rexnumber = /09./
    if ((rexnumber.test(userNumberPhone.value)) && userNumberPhone.value.length == 11 || userNumberPhone.value.length == 10) {
        let userInfo = {
            name: userName.value,
            lastName: userLastName.value,
            numberPhone: userNumberPhone.value,
            maghta: userMaghta.value,
            reshteh: userReshte.value = "none",
            paye: userPaye.value
        }
        userName.value = '';
        userLastName.value = '';
        userNumberPhone.value = '';
        userReshte.value = 'entekhab';
        userMaghta.value = 'entekhab';
        userPaye.value = 'entekhab';
        console.log(userInfo);
    } else {
        console.log("shomare!!!")
    };

});







