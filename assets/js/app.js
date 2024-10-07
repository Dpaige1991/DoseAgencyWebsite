const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

var options = {
    strings: [
        'DOSE Of Creativity',
        'DOSE Of Talent',
        'DOSE Of Inspiration'
    ],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 50,
    backDelay: 2000,
};

var typed = new Typed('#hero-titles', options);  

