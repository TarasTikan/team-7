
const buttonOpen = document.querySelector('.button-burger-open');
const buttonClose = document.querySelector('.button-burger-close');
const slideDownMenu = document.querySelector('.header__menu');




buttonOpen.addEventListener('click', function () {
	slideDownMenu.classList.add('active');

})

buttonClose.addEventListener('click', function (e) {
	slideDownMenu.classList.remove('active');
	
})

slideDownMenu.addEventListener('click', function () {
	slideDownMenu.classList.remove('active');
})




