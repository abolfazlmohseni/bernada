// گرفتن المان‌های مورد نیاز
let $ = document;
const formRegister = $.querySelector("form");
const userName = $.querySelector(".userName");
const userLastName = $.querySelector(".userLastName");
const userNumberPhone = $.querySelector(".userNumberPhone");
const userPass = $.querySelector(".userPass");
const errtextNumberPhone = $.querySelector(".errtextNumberPhone");
const errtextName = $.querySelector(".errtextName");
const errtextLastname = $.querySelector(".errtextLastname");
const charP = document.querySelector(".charP")
const mixP = document.querySelector(".mixP")
const togglePassword = document.querySelector('#togglePassword');
// نمایش راهنمایی‌ها
userPass.addEventListener("focus", () => {
  charP.style.display = "block";
  mixP.style.display = "block";
});

// تغییر نوع نمایش رمز عبور
togglePassword.addEventListener('click', function (e) {
  const type = userPass.getAttribute('type') === 'password' ? 'text' : 'password';
  userPass.setAttribute('type', type);

  this.classList.toggle('bi-eye');
  this.classList.toggle('bi-eye-slash');
});
// بررسی وضعیت رمز عبور
userPass.addEventListener("input", () => {
  const password = userPass.value;
  const charRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // ترکیب حروف و اعداد
  const lengthRegex = /.{8,}/; // حداقل 8 کاراکتر

  // بررسی حداقل طول
  if (lengthRegex.test(password)) {
    charP.style.color = "green"; 
  } else {
    charP.style.color = "red";   
  }

  // بررسی ترکیب حروف و عدد
  if (charRegex.test(password)) {
    mixP.style.color = "green"; 
  } else {
    mixP.style.color = "red";    
  }
});


// تابع بررسی شماره تلفن
function Confirmationnumber(numberPhone) {
  if (numberPhone.startsWith("0") && numberPhone.length === 11) {
    userNumberPhone.classList.remove("err");
    errtextNumberPhone.classList.remove("show");
    return numberPhone;
  } else if (numberPhone.startsWith("9") && numberPhone.length === 10) {
    userNumberPhone.classList.remove("err");
    errtextNumberPhone.classList.remove("show");
    return "0" + numberPhone;
  } else {
    userNumberPhone.classList.add("err");
    errtextNumberPhone.classList.add("show");
    return undefined; 
  }
}
// تابع بررسی رمز عبور
function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(password)) {
    return password;
  } else {

  }
}
// تابع نماش پیام خطا
function checkValueName(val) {
  if (val.length >= 3) {
    errtextName.classList.remove("show");
    return val;
  } else {
    errtextName.classList.add("show");
  }
}
// تابع نماش پیام خطا
function checkValueLastname(val) {
  if (val.length >= 3) {
    errtextLastname.classList.remove("show");
    return val;
  } else {
    errtextLastname.classList.add("show");
  }
}
// ارسال فرم
formRegister.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = checkValueName(userName.value);
  const lastName = checkValueLastname(userLastName.value);
  const numberPhone = Confirmationnumber(userNumberPhone.value);
  const password = validatePassword(userPass.value);

  if (username && lastName && numberPhone && password) {
    const userInfo = {
      name: username,
      phone: numberPhone,
      password: password,
    };

    try {
     
      const response = await fetch('https://bernada.ir/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      const data = await response.json(); // دریافت داده‌ها از پاسخ سرور

      if (response.ok) {
        userName.value = '';
        userLastName.value = '';
        userPass.value = '';
        userNumberPhone.value = '';
        await swal("موفق", data.message, "success", {
          button: "باشه",
        });
        window.location.href = "https://bernada.ir/login";
      } else {
        swal("ناموفق", data.message || "ثبت نام با مشکل مواجه شد لطفاً دوباره تلاش کنید.", "error", {
          button: "باشه",
        });
      }
    } catch (error) {
      swal("خطا", "مشکلی در ارتباط با سرور پیش آمده است. لطفاً دوباره تلاش کنید.", "error", {
        button: "باشه",
      });
    }
  }
});
