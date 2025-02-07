let $ = document;
const userReshte = $.querySelector(".userReshte");
const userMaghta = $.querySelector(".userMaghta");
const userPaye = $.querySelector(".userPaye");
const reshteh = $.querySelector("#reshteh");
const planerForm = $.querySelector(".planerForm");

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


planerForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    
})

