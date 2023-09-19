const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link'); // Perbaiki penamaan variabel
const btnPopup = document.querySelector('.btnlogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active'); // Perbaiki penulisan tanda kurung
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
