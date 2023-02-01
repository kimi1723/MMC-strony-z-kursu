const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links-link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMenu.classList.toggle('show-menu');
};

navLinks.forEach(link => link.addEventListener('click', handleNav));
navBtn.addEventListener('click', handleNav);
