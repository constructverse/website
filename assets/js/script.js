// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let lastScrollPosition = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // User is scrolling down
        navbar.classList.add('hidden');
    } else {
        // User is scrolling up
        navbar.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
});
