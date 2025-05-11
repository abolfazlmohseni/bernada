const phone = JSON.parse(localStorage.getItem('user')).phone || logut();
async function logut() {
    swal("خطا!", "ابتدا وارد شوید", "error");
    window.location.href = "https://bernada.ir";
}; 
// دریافت اطلاعات کاربر از دیتابیس
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(`https://bernada.ir/api/user/profile/${phone}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const user = await response.json();
            const { name, phone, email, image } = user;

            // نمایش اطلاعات کاربر در فرم
            document.querySelectorAll('.input')[0].value = name; // نمایش نام
            document.querySelectorAll('.input')[1].value = phone; // نمایش شماره تلفن
            document.querySelectorAll('.input')[2].value = email; // نمایش ایمیل

            // نمایش عکس پروفایل (اگر موجود باشه)
            if (image && image !== '/imag/user6.jpg') {
                document.querySelector('#profilePreview').src = `https://bernada.ir/${image}`;
            }
        } else {
            swal("خطا!", "مشکلی در دریافت پروفایل پیش آمد.", "error");
        }
    } catch (err) {
        console.log(err);
        await swal("خطا!", "خطای شبکه یا سرور.", "error");
        window.location.href = "https://bernada.ir"
    }
});


// تغییر اطلاعات کاربر و اضافه کردن پروفایل
document.querySelector('.submit').addEventListener('click', async () => {
    const nameInput = document.querySelectorAll('.input')[0];
    const phoneInput = document.querySelectorAll('.input')[1];
    const emailInput = document.querySelectorAll('.input')[2];


    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const profilePic = profileInput.files[0];

    function checkEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
    let chekedEmail = "وارد نشده است";
    if (checkEmail(email)) {
        chekedEmail = email;
    } else {
        chekedEmail = "وارد نشده است";
        swal("خطا!", "ایمیل نامعتبر است", "error");
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', chekedEmail);
    console.log(formData.get('email'));
    if (profilePic) {
        formData.append('profilePic', profilePic);
    }

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `https://bernada.ir/api/user/profile/${phone}`, true);

    // دایره و درصد
    const radius = 35;
    const circumference = 2 * Math.PI * radius;

    const progressContainer = document.querySelector('.circle-progress');
    const progressBar = document.querySelector('.progress-ring-bar');
    const progressText = document.querySelector('.progress-text');
    const submitButton = document.querySelector('.submit');
    const popup = document.querySelector('.popup-upload');
    progressContainer.style.display = 'block';
    progressBar.style.strokeDasharray = `${circumference}`;
    progressBar.style.strokeDashoffset = `${circumference}`;
    progressText.textContent = '0%';
    popup.style.display = 'flex';
    submitButton.disabled = true;
    submitButton.textContent = 'در حال آپلود...';

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            const offset = circumference - (percent / 100) * circumference;
            progressBar.style.strokeDashoffset = offset;
            progressText.textContent = `${percent}%`;
        }
    };

    xhr.onload = function () {
        submitButton.disabled = false;
        submitButton.textContent = 'ذخیره تغییرات';
        progressBar.style.strokeDashoffset = '0';
        progressText.textContent = '100%';

        if (xhr.status === 200) {
            popup.style.display = 'none';
            const data = JSON.parse(xhr.responseText);
            swal("موفق آمیز", "تغییرات ذخیره شد", "success", {
                button: "باشه",
            });

            localStorage.setItem('user', JSON.stringify(data.user));
            location.reload();
        } else {
            const errorData = JSON.parse(xhr.responseText);
            swal("خطا!", errorData.message || "مشکلی پیش اومد", "error");
        }
    };

    // خطا
    xhr.onerror = function () {
        submitButton.disabled = false;
        submitButton.textContent = 'ذخیره تغییرات';
        swal("خطا!", "ارتباط با سرور برقرار نشد", "error");
    };

    // ارسال فرم
    xhr.send(formData);


})
const profileInput = document.querySelector('#profile');
const profileLabel = document.querySelector('label[for="profile"]');

profileInput.addEventListener('change', () => {
    if (profileInput.files.length > 0) {
        profileLabel.textContent = profileInput.files[0].name;
    } else {
        profileLabel.textContent = 'اپلود پروفایل';
    }
});
// تغییر گذرواژه

const changePassBTN = document.querySelector(".changePass")
const currentPasswordInput = document.querySelector(".currentPassword")
const newPasswordInput = document.querySelector(".newPassword")


changePassBTN.addEventListener("click", async () => {

    const data = {
        currentPassword: currentPasswordInput.value,
        newPassword: newPasswordInput.value
    }
    try {

        const response = await fetch(`https://bernada.ir/api/user/change-password/${phone}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        )
        const result = await response.json()

        if (response.ok) {
            swal("موفق!", result.message || "رمز عبور با موفقیت تغییر کرد", "success");
        } else {
            swal("خطا!", result.message || "مشکلی پیش اومد", "error");
        }

    } catch (error) {
        console.error(error);
        swal("خطا!", "مشکلی در ارتباط با سرور پیش اومد", "error");
    }
})
// اعتبارسنجی ورودی عکس پروفایل
profileInput.addEventListener('change', () => {
    const file = profileInput.files[0];

    if (file) {
        const maxSize = 2 * 1024 * 1024; // 2MB

        if (!file.type.startsWith('image/')) {
            swal("خطا", "فقط فایل‌های تصویری مجاز هستند!", "error");
            profileInput.value = '';
        } else if (file.size > maxSize) {
            swal("خطا", "حجم عکس باید کمتر از ۲ مگابایت باشد!", "error");
            profileInput.value = '';
        }
    }
});
