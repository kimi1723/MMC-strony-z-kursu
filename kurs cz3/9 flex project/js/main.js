const navItems = document.querySelector('.nav-items');
const burgerBtn = document.querySelector('.burger-btn');
const navLinks = document.querySelectorAll('.nav__item');

const handleNav = () => {
	navItems.classList.toggle('nav-items--active');

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

navLinks.forEach(link => link.addEventListener('click', handleNav));
burgerBtn.addEventListener('click', handleNav);
