// Functionality for the Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.getElementById('navLinks');

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinksContainer.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
}

// Functionality for Scroll Reveal Effect
const sectionContents = document.querySelectorAll('.section-content');
const skillsContent = document.querySelector('.skills-content');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.2
});

sectionContents.forEach(content => {
    observer.observe(content);
});

// เพิ่ม skillsContent เข้าไปใน observer
if (skillsContent) {
    observer.observe(skillsContent);
}

// Hero Section Fade-in Effect
const heroContent = document.querySelector('.hero-content');
document.addEventListener('DOMContentLoaded', () => {
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 500);
    }
});