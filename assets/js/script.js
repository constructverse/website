// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar visibility control
const navbar = document.querySelector('header');
let isScrolling;
let lastScrollPosition = window.pageYOffset;

// Initial state - show navbar
navbar.classList.remove('hidden');

window.addEventListener('scroll', () => {
    // Show navbar when at the top of the page
    if (window.pageYOffset === 0) {
        navbar.classList.remove('hidden');
        return;
    }

    // Hide navbar while actively scrolling
    navbar.classList.add('hidden');
    
    // Clear the existing timeout
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends (100ms)
    isScrolling = setTimeout(() => {
        navbar.classList.remove('hidden');
    }, 100);
});

// Scroll animation
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});
