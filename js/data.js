const hamburger = document.querySelector('.hamburger');
const ulNav = document.querySelector('.ul-nav');

hamburger.addEventListener('click', () => {
    ulNav.classList.toggle('show');
});