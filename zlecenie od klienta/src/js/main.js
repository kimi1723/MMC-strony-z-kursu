const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links-link');
const offerBtns = document.querySelectorAll('.cards-box__button');
let i = 0;

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMenu.classList.toggle('show-menu');
};

// NA FOCUS TRZEBA TO NAPISAC
const handleBtns = () => {
	if (i === 0) {
		const activeBtn = document.querySelector('.cards-box__button--active');

		activeBtn.classList.remove('cards-box__button--active');
		i++;
	}
	// lub offerbtns.foreach btn => btn.classlist.remove('cards-box__button--active')
};

offerBtns.forEach(btn => btn.addEventListener('click', handleBtns));
navLinks.forEach(link => link.addEventListener('click', handleNav));
navBtn.addEventListener('click', handleNav);
