
const buttonOpen = document.querySelector('.button-burger-open');
const buttonClose = document.querySelector('.button-burger-close');
const slideDownMenu = document.querySelector('.header__menu');


buttonOpen.addEventListener('click', function () {
	slideDownMenu.classList.add('active');

})

buttonClose.addEventListener('click', function (e) {
	slideDownMenu.classList.remove('active');
	
})

const links = document.querySelectorAll('.header__link');

console.log(links);
for (let index = 0; index < links.length; index++) {
	const link = links[index];
	link.addEventListener('click', function () {
	slideDownMenu.classList.remove('active');
})
}

	



