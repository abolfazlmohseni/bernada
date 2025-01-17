let maghta = document.querySelector(".maghta");
let paye = document.querySelector(".paye");

let motevaseteOne = [
    'هفتم',
    'هشتم',
    'نهم'
]

maghta.addEventListener('change', function () {
    if (maghta.value == 'ebtedayi') {
        console.log("salam")
    } else if (maghta.value == 'motevaseteOne') {
        let htmlopshon = `
        <option>${motevaseteOne[0]}</option>
        <option>${motevaseteOne[1]}</option>
        <option>${motevaseteOne[2]}</option>
        `
        paye.insertAdjacentHTML("beforeend",htmlopshon)
    } else {
        console.log("salam2")
    }
})