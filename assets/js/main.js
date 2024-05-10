const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


const navLinks = document.querySelectorAll(".nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLinks.forEach(n => n.addEventListener("click", linkAction));


function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}


window.addEventListener("scroll", scrollHeader);


const footerButtons = document.querySelectorAll(".footer__button");
if (footerButtons) {
    footerButtons.forEach(button => {
        button.addEventListener("click", () => {
            footerButtons.forEach(button => button.classList.toggle("active"));
        });
    });
}


AOS.init({ once: true, mirror: false });