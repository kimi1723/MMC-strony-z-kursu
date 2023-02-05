const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links-link');
const offerBtns = document.querySelectorAll('.cards-box__button');
const activeBtn = document.querySelector('.cards-box__button--active');
const footerYear = document.querySelector('.footer-year');
let i = 0;

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMenu.classList.toggle('show-menu');
};

const handleBtnsClick = e => {
	if (i === 0 && true !== e.target.classList.contains('cards-box__button--active')) {
		activeBtn.classList.remove('cards-box__button--active');
		i++;
	}
};

const handleBtnsFocus = e => {
	offerBtns.forEach(btn => {
		if (
			i === 0 &&
			document.activeElement === btn &&
			true !== e.target.classList.contains('cards-box__button--active')
		) {
			activeBtn.classList.remove('cards-box__button--active');
			i++;
		}
	});
};

const handleYear = () => {
	const year = new Date();

	footerYear.textContent = year;
};

document.addEventListener('DOMContentLoaded', handleYear);
window.addEventListener('keyup', handleBtnsFocus);
offerBtns.forEach(btn => btn.addEventListener('click', handleBtnsClick));
navLinks.forEach(link => link.addEventListener('click', handleNav));
navBtn.addEventListener('click', handleNav);
