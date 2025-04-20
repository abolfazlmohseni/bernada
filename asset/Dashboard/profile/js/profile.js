document.addEventListener('DOMContentLoaded', async () => {
    const phone = JSON.parse(localStorage.getItem('user')).phone; // از لوکال استورج شماره تلفن رو می‌گیریم
    try {
        const response = await fetch(`http://localhost:3000/api/user/profile/${phone}`, {
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
                document.querySelector('#profilePreview').src = `http://localhost:3000/${image}`;
            }
        } else {
            swal("خطا!", "مشکلی در دریافت پروفایل پیش آمد.", "error");
        }
    } catch (err) {
        console.log(err);
        swal("خطا!", "خطای شبکه یا سرور.", "error");
    }
});




document.querySelector('.submit').addEventListener('click', async () => {
    const nameInput = document.querySelectorAll('.input')[0];
    const phoneInput = document.querySelectorAll('.input')[1];
    const emailInput = document.querySelectorAll('.input')[2];
    const profileInput = document.querySelector('#profile');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim(); // ریداونلیه ولی لازمه بفرستیم برای شناسایی کاربر
    const email = emailInput.value.trim();
    const profilePic  = profileInput.files[0];

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    if (profilePic ) {
        formData.append('profilePic', profilePic );
    }

    try {
        const response = await fetch(`http://localhost:3000/api/user/profile/${phone}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            await swal("موفق آمیز", "ورود با موفعیت انجام شد", "success", {
                button: "باشه",
              });
            localStorage.setItem('user', JSON.stringify(data.user));
            location.reload(); // صفحه رو رفرش کن تا تغییرات نمایش داده بشه
        } else {
            const errorData = await response.json();
            swal("خطا!", errorData.message || "مشکلی پیش اومد", "error");
        }
    } catch (err) {
        console.error(err);
        await swal("موفق آمیز", "ورود با موفعیت انجام شد", "success", {
            button: "باشه",
          });
    }
});

