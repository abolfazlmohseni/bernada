document.addEventListener("DOMContentLoaded", () => {
  // گرفتن عناصر مورد نیاز
  const formLogin = document.querySelector('#formLogin');
  const userNumberPhone = document.querySelector('.userNumberPhone');
  const userPass = document.querySelector('.userPass');
  const togglePassword = document.querySelector('#togglePassword');

  // تغییر نوع نمایش رمز عبور
  togglePassword.addEventListener('click', function (e) {
    const type = userPass.getAttribute('type') === 'password' ? 'text' : 'password';
    userPass.setAttribute('type', type);

    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
  });

  // ارسال فرم
  formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userInfo = {
      phone: userNumberPhone.value,
      password: userPass.value,
    };

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const data = await response.json();
        await swal("موفق آمیز", "ورود با موفعیت انجام شد", "success", {
          button: "باشه",
        });
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = "http://localhost:3000/overview";
      } else {
        swal("ناموفق", "رمز عبور یا شماره تلفن معتبر نیست لطفا دوباره تلاش کنید.", "error", {
          button: "باشه",
        });
      }
    } catch { }
  });
});
