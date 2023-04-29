const menu = document.querySelector('#menu');
const aside = document.querySelector('.aside');
const closeMenu = document.querySelector('#close_menu');

menu.addEventListener('click', showMenu);

function showMenu(){
    aside.classList.toggle('active');
}

closeMenu.addEventListener('click', hiddenMenu);

function hiddenMenu(){
    aside.classList.remove('active');
}