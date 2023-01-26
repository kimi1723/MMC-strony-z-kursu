const navItems = document.querySelector('.nav-items');
const burgerBtn = document.querySelector('.burger-btn');
const navLinks = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navItems.classList.toggle('nav-items--active');

	navBtnBars.classList.remove('black-bars-color');

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navLinks.forEach(link => {
		link.classList.toggle('nav-items-animation');
		link.style.animationDelay = `${delayTime}s`;
		delayTime += 0.1;
	});
};

// const handleObserver = () => {
// 	const currentSection = window.scrollY;

// 	allSections.forEach(section => {
// 		console.log(section.offsetTop);
// 		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
// 			navBtnBars.classList.add('black-bars-color');
// 		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
// 			navBtnBars.classList.remove('black-bars-color');
// 		}
// 	});
// };

const handleCurrentYear = () => {
	const year = new Date().getFullYear();

	footerYear.textContent = `${year} `;
};

// handleObserver();
handleCurrentYear();
navLinks.forEach(link => link.addEventListener('click', handleNav));
burgerBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
