
// این کد برای بارگذاری تصویر پروفایل کاربر از دیتابیس و نمایش آن در صفحه تنظیمات است
window.addEventListener("DOMContentLoaded", async () => {
    const phone = JSON.parse(localStorage.getItem('user')).phone; // از لوکال استورج شماره تلفن رو می‌گیریم
    // دریافت اطلاعات کاربر از دیتابیس
    const response = await fetch(`http://localhost:3000/api/user/profile/${phone}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        const user = await response.json();
        var imag = user.image;
    }

    if (imag && imag !== "/imag/user6.jpg") {
        document.querySelector("#profilePreview").src = `http://localhost:3000/${imag}`;
    }
})
