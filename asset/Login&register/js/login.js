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
      const response = await fetch('https://itabolfazlmohseni.ir/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Welcome, ${data.user.username}!`);
        localStorage.setItem('user', JSON.stringify(data.user)); // ذخیره در لوکال استوریج

        window.location.href = "https://itabolfazlmohseni.ir/overview.html"; // هدایت به داشبورد
      } else {
        const errorMessage = await response.text();
        alert(`Failed to login: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to login!');
    }
  });
});
