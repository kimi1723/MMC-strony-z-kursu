const footerYear = document.querySelector('.footer-year');

const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links-link');

const offerBtns = document.querySelectorAll('.cards-box__button');
const activeBtn = document.querySelector('.cards-box__button--active');
const btnEventListeners = ['click', 'keydown'];
let i = 0;

const handleYear = () => {
	const year = new Date().getFullYear();

	footerYear.textContent = year;
};

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMenu.classList.toggle('show-menu');
};

const handleBtns = () => {
	setTimeout(
		() =>
			offerBtns.forEach(btn => {
				if (i === 0 && document.activeElement === btn) {
					activeBtn.classList.remove('cards-box__button--active');
					i++;
				}
			}),
		'1'
	);
};

handleYear();
navLinks.forEach(link => link.addEventListener('click', handleNav));
navBtn.addEventListener('click', handleNav);
btnEventListeners.forEach(e => {
	window.addEventListener(e, handleBtns);
});
