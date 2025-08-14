// Smooth scrolling for navigation links
    document.querySelectorAll('nav a, a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Scroll reveal animation
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
      } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
      }
    });

    // Floating Action Button
    const fab = document.getElementById('fab');
    fab.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Show/hide FAB based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        fab.style.opacity = '1';
        fab.style.visibility = 'visible';
      } else {
        fab.style.opacity = '0';
        fab.style.visibility = 'hidden';
      }
    });

    // Parallax effect for floating shapes
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll('.floating-shape');
      
      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    });

    // Skill bar animation on scroll
    function animateSkillBars() {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight - 100) {
          bar.style.animation = 'none';
          bar.offsetHeight; // Trigger reflow
          bar.style.animation = 'fillBar 2s ease-in-out';
        }
      });
    }

    window.addEventListener('scroll', animateSkillBars);

    // Form submission
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('ขอบคุณสำหรับข้อความ! ฉันจะติดต่อกลับโดยเร็วที่สุด');
    });

    // Add typing effect to subtitle
    function typeWriter(element, text, speed = 50) {
      let i = 0;
      element.innerHTML = '';
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }

    // Initialize typing effect after page load
    window.addEventListener('load', () => {
      const subtitle = document.querySelector('.subtitle');
      const originalText = subtitle.textContent;
      setTimeout(() => {
        typeWriter(subtitle, originalText, 80);
      }, 1500);
    });

    // Projects Carousel - Fixed Implementation
    function initProjectsCarousel() {
      let currentProject = 0;
      const carousel = document.getElementById('projectsCarousel');
      const cards = document.querySelectorAll('.project-card');
      const totalCards = cards.length;
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const indicators = document.getElementById('indicators');

      // Clear existing indicators
      indicators.innerHTML = '';

      // Create indicators
      for (let i = 0; i < totalCards; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToProject(i));
        indicators.appendChild(indicator);
      }

      function updateCarousel() {
        const cardWidth = 350; // Fixed width from CSS
        const gap = 32; // 2rem gap
        const offset = -(currentProject * (cardWidth + gap));
        carousel.style.transform = `translateX(${offset}px)`;
        
        // Update indicators
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentProject);
        });
        
        // Update button states
        prevBtn.disabled = currentProject === 0;
        nextBtn.disabled = currentProject === totalCards - 1;
      }

      function nextProject() {
        if (currentProject < totalCards - 1) {
          currentProject++;
          updateCarousel();
        } else {
          // Loop back to first project
          currentProject = 0;
          updateCarousel();
        }
      }

      function prevProject() {
        if (currentProject > 0) {
          currentProject--;
          updateCarousel();
        } else {
          // Loop to last project
          currentProject = totalCards - 1;
          updateCarousel();
        }
      }

      function goToProject(index) {
        currentProject = index;
        updateCarousel();
      }

      // Event listeners
      nextBtn.addEventListener('click', nextProject);
      prevBtn.addEventListener('click', prevProject);

      // Auto-play carousel
      let autoPlay = setInterval(nextProject, 4000);

      // Pause auto-play on hover
      const projectsContainer = document.querySelector('.projects-container');
      projectsContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
      });
      
      projectsContainer.addEventListener('mouseleave', () => {
        clearInterval(autoPlay);
        autoPlay = setInterval(nextProject, 4000);
      });

      // Initialize carousel
      updateCarousel();

      // Touch/Swipe support for mobile
      let startX = 0;
      let endX = 0;
      let isDragging = false;

      carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      }, { passive: true });

      carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
      }, { passive: true });

      carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
          if (diff > 0) {
            nextProject(); // Swipe left - next
          } else {
            prevProject(); // Swipe right - previous
          }
        }
        isDragging = false;
      }, { passive: true });

      // Mouse drag support for desktop
      let isMouseDown = false;
      let mouseStartX = 0;

      carousel.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        mouseStartX = e.clientX;
        carousel.style.cursor = 'grabbing';
        e.preventDefault();
      });

      carousel.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
      });

      carousel.addEventListener('mouseup', (e) => {
        if (!isMouseDown) return;
        const mouseEndX = e.clientX;
        const diff = mouseStartX - mouseEndX;
        
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            nextProject();
          } else {
            prevProject();
          }
        }
        
        isMouseDown = false;
        carousel.style.cursor = 'grab';
      });

      carousel.addEventListener('mouseleave', () => {
        isMouseDown = false;
        carousel.style.cursor = 'grab';
      });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        const projectsSection = document.querySelector('#projects');
        const rect = projectsSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevProject();
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextProject();
          }
        }
      });

      // Set cursor style
      carousel.style.cursor = 'grab';
      
      // Prevent text selection during drag
      carousel.addEventListener('selectstart', (e) => e.preventDefault());
    }

    // Initialize carousel when DOM is loaded
    document.addEventListener('DOMContentLoaded', initProjectsCarousel);

    // Add custom cursor effect
    document.addEventListener('mousemove', (e) => {
      const cursor = document.createElement('div');
      cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #4facfe, transparent);
        border-radius: 50%;
        pointer-events: none;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        opacity: 0.6;
        z-index: 9999;
        animation: cursorFade 1s ease-out forwards;
      `;
      document.body.appendChild(cursor);
      
      setTimeout(() => cursor.remove(), 1000);
    });

    // CSS animation for cursor effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes cursorFade {
        0% { transform: scale(0); opacity: 0.6; }
        50% { transform: scale(1); opacity: 0.3; }
        100% { transform: scale(2); opacity: 0; }
      }
      
      @keyframes fillBar {
        from { width: 0; }
        to { width: var(--target-width); }
      }
      
      input::placeholder, textarea::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
      
      input:focus, textarea:focus {
        outline: none;
        box-shadow: 0 0 0 2px #4facfe;
      }
    `;
    document.head.appendChild(style);