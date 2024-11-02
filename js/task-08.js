const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Verificăm dacă câmpurile sunt goale
  if (email === '' || password === '') {
    alert('All fields must be completed.');
    return;
  }

  // Creăm un obiect cu datele introduse
  const formData = {
    email: email,
    password: password,
  };

  // Afișăm obiectul în consolă
  console.log(formData);

  // Resetăm formularul
  loginForm.reset();
});
