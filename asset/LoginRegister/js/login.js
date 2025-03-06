document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.querySelector('#formLogin');
  const userNumberPhone = document.querySelector('.userNumberPhone');
  const userPass = document.querySelector('.userPass');

  formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userInfo = {
      numberPhone: userNumberPhone.value,
      password: userPass.value,
    };

    try {
      const response = await fetch('/api/auth/login', {
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

        window.location.href = "https://itabolfazlmohseni.ir/overview";
      } else {
        swal("ناموفق", "رمز عبور یا شماره تلفن معتبر نیست لطفا دوباره تلاش کنید.", "error", {
          button: "باشه",
        });
      }
    } catch { }
  });
});
