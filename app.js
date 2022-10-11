const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

//adding click eventlistener to the menu const
menu.addEventListener('click',function(){
   //am going to toggle the classlist of isactive which have vcreated
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});