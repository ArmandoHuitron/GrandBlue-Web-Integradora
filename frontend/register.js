const API_BASE_URL = 'http://localhost:3000';

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  try {
    const res = await fetch(`${API_BASE_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    if (res.ok) {
      message.style.color = 'green';
      message.textContent = data.message;

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      message.style.color = '#e74c3c';
      message.textContent = data.error;
    }
  } catch (err) {
    message.style.color = '#e74c3c';
    message.textContent = 'Error del servidor. Intenta más tarde.';
  }
});
