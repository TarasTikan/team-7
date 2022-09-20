
const buttonOpen = document.querySelector('.button-burger-open');
const buttonClose = document.querySelector('.button-burger-close');
const slideDownMenu = document.querySelector('.header__menu');


const home = document.querySelector('.home__link');
const howMade = document.querySelector('.homemade__link');
const products = document.querySelector('.product__link');
const contact = document.querySelector('.contact__link');

buttonOpen.addEventListener('click', function () {
	slideDownMenu.classList.add('active');

})

buttonClose.addEventListener('click', function (e) {
	slideDownMenu.classList.remove('active');
	
})

home.addEventListener('click', function () {
	slideDownMenu.classList.remove('active');
	
})

howMade.addEventListener('click', function () {
	slideDownMenu.classList.remove('active');
	
})

products.addEventListener('click', function () {
	slideDownMenu.classList.remove('active');
	
})

contact.addEventListener('click', function () {
	slideDownMenu.classList.remove('active');
	
})



