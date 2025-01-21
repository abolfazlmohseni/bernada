// فرم ورود
const formLogin = document.querySelector('#formLogin');
const userNumberPhone = document.querySelector('.userNumberPhone');
const userPass = document.querySelector('.userPass');

formLogin.addEventListener('submit', async (event) => {
  event.preventDefault();

  // دریافت اطلاعات از فرم
  const userInfo = {
    numberPhone: userNumberPhone.value,
    password: userPass.value,
  };

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (response.ok) {
      alert('Login successful!');
      // اگر ورود موفق بود، اطلاعات فرم را پاک می‌کنیم
      userNumberPhone.value = '';
      userPass.value = '';
    } else {
      const errorMessage = await response.text();
      alert(`Failed to login: ${errorMessage}`);
    }

  } catch (error) {
    console.error('Error during login:', error);
    alert('Failed to login!');
  }
});
