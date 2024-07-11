// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const navLinks = navbar.querySelectorAll("a");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "yellow";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "white";
        });
    });
});
