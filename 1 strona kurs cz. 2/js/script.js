const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navDisplayed = document.querySelector('.nav-displayed');

const navBg = () => {
	const desktop = window.matchMedia('(min-width: 1200px');
	const mobile = window.matchMedia('(max-width: 1199px)');

	if ((window.scrollY >= 80 && mobile.matches) || (window.scrollY >= 300 && desktop.matches)) {
		nav.classList.add('shadow-bg');
	} else {
		nav.classList.remove('shadow-bg');
	}
};

const addShadow = () => {
	const mobileNavShadow = () => {
		if (window.scrollY < 80) {
			setTimeout(() => {
				if (navDisplayed.classList.contains('show') && nav.classList.contains('shadow-bg') === false) {
					console.log(nav.classList.contains('shadow-bg') === true);
					nav.classList.add('shadow-bg');
				} else {
					nav.classList.remove('shadow-bg');
				}
			}, 360);
		}
	};
	nav.addEventListener('click', mobileNavShadow);
	document.addEventListener('scroll', navBg);
};

const hideNav = () => {
	navDisplayed.classList.remove('show');
};

navLinks.forEach(link => link.addEventListener('click', hideNav));

document.addEventListener('DOMContentLoaded', addShadow);
