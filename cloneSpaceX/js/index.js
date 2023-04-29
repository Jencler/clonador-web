const menu = document.querySelector("#menu");
const aside = document.querySelector(".aside");

menu.addEventListener('click', showMenu);
function showMenu(){
    aside.classList.toggle('active');
};