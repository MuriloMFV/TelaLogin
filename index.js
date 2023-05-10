const passwordInput = document.querySelector('#password');
passwordInput.addEventListener('input', () => {
  const label = passwordInput.nextElementSibling;
  if (passwordInput.value !== '') {
    label.classList.add('valid');
  } else {
    label.classList.remove('valid');
  }
});