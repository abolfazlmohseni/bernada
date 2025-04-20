
//اسکریپت منو
const closemenu = document.querySelector(".closemenu")
const menu = document.querySelector("menu-panel")
closemenu.addEventListener("click", () => {
    menu.style.right = "-100%"
})
const openmenu = document.querySelector(".openmenu")
openmenu.addEventListener("click", () => {
    menu.style.right = "0"
})
// گرفتن و نمایش اسم کاربر از لوکال استورج
let userinfo = JSON.parse(localStorage.getItem('user'))
const showName = document.querySelector(".userName");
showName.innerHTML = userinfo.name