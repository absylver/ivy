const navbtn = document.querySelector('.hamburger');
const navBar = document.querySelector('nav');
const closeMenuBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

navbtn.addEventListener('click', () => {
    navBar.classList.add('active')
    overlay.classList.add('show-panel');
});

closeMenuBtn.addEventListener('click', () => {
    navBar.classList.remove('active')
    overlay.classList.remove('show-panel');
});