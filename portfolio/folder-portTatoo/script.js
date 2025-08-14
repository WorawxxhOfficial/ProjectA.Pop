document.addEventListener('DOMContentLoaded', function() {

    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links-container');
    const navLinks = document.querySelectorAll('.nav-links a');

    hamburgerMenu.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // บรรทัดนี้ทำให้ปุ่มเปลี่ยนเป็นกากบาท
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            hamburgerMenu.classList.remove('active'); // บรรทัดนี้ทำให้ปุ่มกลับมาเป็นสามขีดเมื่อกดลิงก์
        });
    });

    // Scroll reveal effect
    const sections = document.querySelectorAll('.section-content');
    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (sectionTop < screenHeight - 150) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load

    // Accordion functionality for skills section
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;

            // Close all other accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.querySelector('.accordion-content').classList.remove('active');
                    item.querySelector('.accordion-header').classList.remove('active');
                }
            });

            // Toggle the clicked accordion
            accordionContent.classList.toggle('active');
            header.classList.toggle('active');
        });
    });

    // Project Category Switching
    const categoryBtns = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));

            // Add active class to the clicked button
            btn.classList.add('active');

            const category = btn.dataset.category;

            projectCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block'; // Show the card
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            });
        });
    });
});