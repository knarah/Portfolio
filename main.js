'use strict';
// 1.scrolling
// 2. get Navbar's height

//Make navbar appear when scrolled
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handling Scrolling - Navbar menu
const navbarMenu = document.querySelector('.navbar__topmenu');

navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    if (link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
   scrollTo.scrollIntoView({behavior: "smooth"});
    
});