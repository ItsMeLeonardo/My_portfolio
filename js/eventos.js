const menu = document.querySelector('.menu');
const burger_button = document.querySelector('#button_burger');
const ipad = window.matchMedia('screen and (max-width: 767px)');
const partes = document.querySelector('.container_link');
// const partes = document.getElementsByClassName('link');
ipad.addListener(validation);
validation(ipad);
console.log(partes)
function validation(eventScreen){
    // console.log(eventScreen);
    if(eventScreen.matches){
        burger_button.addEventListener('click',showHide);
    }else{
        burger_button.removeEventListener('click',showHide);
    }
}
partes.addEventListener('click', remover);
function remover(){
    menu.classList.remove('menu_active');
}
function showHide(){
    if (menu.classList.contains('menu_active')){
        menu.classList.remove('menu_active');
    }else{
        menu.classList.add('menu_active');
    }
}

