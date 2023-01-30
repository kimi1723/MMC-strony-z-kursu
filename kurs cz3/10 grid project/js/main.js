const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const navLink = document.querySelectorAll('.nav__link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

const handleCurrentYear = () => {
	const year = new Date();
	footerYear.textContent = year.getFullYear();
};

navBtn.addEventListener('click', handleNav);
navLink.forEach(link => link.addEventListener('click', handleNav));
document.addEventListener('DOMContentLoaded', handleCurrentYear);
