const menu = document.getElementById("menu")
const carousel = document.getElementById("template-mo-zay-hero-carousel")

window.addEventListener('scroll', function() {
    const position = carousel.getBoundingClientRect();
    
    if (position.top < -80 && position.top > -110) {
        menu.classList.add("dark-shadow")
    }
    if (position.top > -80) {
        menu.classList.remove("dark-shadow")
    }
});

