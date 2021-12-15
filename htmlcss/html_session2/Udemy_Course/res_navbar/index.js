const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",mobileMenu);
function mobileMenu(){
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
}