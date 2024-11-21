const btn = document.getElementById('menu');

const menu = document.getElementById('mobile-menu');

btn.addEventListener('click',navToggle);

function navToggle(){
    btn.classList.toggle('open');
    
    document.body.classList.toggle('stop-scrolling');

    menu.classList.toggle('show-menu');
}
/* hiding-navbar */

var lastScrollTop = 0;
  navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-100px"; 
    } else {
        navbar.style.top="0"; 
        
    }
    lastScrollTop = scrollTop;
})


