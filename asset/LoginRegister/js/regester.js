let $ = document;

const formRegister = $.querySelector("form");
const userName = $.querySelector(".userName");
const userLastName = $.querySelector(".userLastName");
const userNumberPhone = $.querySelector(".userNumberPhone");

const userPass = $.querySelector(".userPass");
const errtextNumberPhone = $.querySelector(".errtextNumberPhone");
const errtextPassword = $.querySelector(".errtextPassword")
const errtextName = $.querySelector(".errtextName");
const errtextLastname = $.querySelector(".errtextLastname");


function Confirmationnumber(numberPhone) {

  if (numberPhone.startsWith("0") & numberPhone.length == 11) {
    userNumberPhone.classList.remove("err")
    errtextNumberPhone.classList.remove("show")
    return numberPhone
  } else if (numberPhone.startsWith("9") & numberPhone.length == 10) {
    userNumberPhone.classList.remove("err")
    errtextNumberPhone.classList.remove("show")
    return "0" + numberPhone
  } else {
    userNumberPhone.classList.add("err")
    errtextNumberPhone.classList.add("show")
  }

}
function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(password)) {
    userPass.classList.remove("err");
    errtextPassword.classList.remove("show");
    return password;
  } else {
    userPass.classList.add("err");
    errtextPassword.classList.add("show");
  }
}
function checkValueName(val) {
  if (val.length >= 3) {
    errtextName.classList.remove("show")
    return val
  } else {
    errtextName.classList.add("show")
  }

}
function checkValueLastname(val) {
  if (val.length >= 3) {
    errtextLastname.classList.remove("show")
    return val
  } else {
    errtextLastname.classList.add("show")
  }
}



formRegister.addEventListener("submit", async event => {
  event.preventDefault();



  const userInfo = {
    username: checkValueName(userName.value),
    lastName: checkValueLastname(userLastName.value),
    numberPhone: Confirmationnumber(userNumberPhone.value),
    password: validatePassword(userPass.value)
  }

  if (userInfo.numberPhone != undefined & userInfo.password != undefined & userInfo.username != undefined & userInfo.lastName != undefined) {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        
        // Reset form
        userName.value = '';
        userLastName.value = '';
        userPass.value = '';
        userNumberPhone.value = '';
        swal("موفق", "ثبت نام با موقعیت انجام شد ورود کیند.", "success", {
          button: "باشه",
        });
      } else {
        swal("ناموفق", "ثبت نام با مشکل مواجه شد لطفا دوباره تلاش کنید.", "error", {
          button: "باشه",
        });
      }
    } catch (error) {

    }
  }


});








