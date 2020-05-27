const navLinks = document.querySelector('.nav-links');
const burgerIcons = document.querySelector('.bugerIcons');

burgerIcons.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
    burgerIcons.classList.toggle('toogle');
});