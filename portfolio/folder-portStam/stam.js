
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const colors = ['#667eea', '#764ba2', '#f093fb', '#ff6b6b'];
            
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 10 + 5 + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize particles
        createParticles();

        // Enhanced animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Animate skill bars with stagger effect
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach((bar, index) => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, index * 200 + 300);
                    });
                }
            });
        }, observerOptions);

        // Observe all elements with animation class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Typing animation for role
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.textContent = '';
            element.style.borderRight = '2px solid rgba(255,255,255,0.8)';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    // Blinking cursor effect
                    setInterval(() => {
                        element.style.borderRight = element.style.borderRight === 'none' ? 
                            '2px solid rgba(255,255,255,0.8)' : 'none';
                    }, 500);
                }
            }
            type();
        }

        // Initialize typing animation
        setTimeout(() => {
            const roleElement = document.querySelector('.role');
            if (roleElement) {
                typeWriter(roleElement, 'Full Stack Developer', 150);
            }
        }, 2000);

        // Enhanced hover effects for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.project-image i');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(10deg)';
                    icon.style.transition = 'all 0.3s ease';
                }
                
                // Add glow effect to tech tags
                const techTags = this.querySelectorAll('.tech-tag');
                techTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = 'scale(1.05)';
                        tag.style.boxShadow = 'var(--neon-glow)';
                    }, index * 50);
                });
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.project-image i');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
                
                const techTags = this.querySelectorAll('.tech-tag');
                techTags.forEach(tag => {
                    tag.style.transform = 'scale(1)';
                    tag.style.boxShadow = 'none';
                });
            });
        });

        // Interactive timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(20px) scale(1.02)';
                const year = this.querySelector('.timeline-year');
                if (year) {
                    year.style.transform = 'scale(1.1)';
                    year.style.background = 'var(--bg-gradient)';
                    year.style.color = 'white';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
                const year = this.querySelector('.timeline-year');
                if (year) {
                    year.style.transform = 'scale(1)';
                    year.style.background = 'rgba(102, 126, 234, 0.1)';
                    year.style.color = 'var(--primary-color)';
                }
            });
        });

        // Contact items interactive animation
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1.3) rotate(360deg)';
                    icon.style.color = 'var(--accent-color)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    icon.style.color = 'var(--primary-color)';
                }
            });
        });

        // // Achievement items hover effect
        // document.querySelectorAll('.achievement-item').forEach(item => {
        //     item.addEventListener('mouseenter', function() {
        //         const icon = this.querySelector('i');
        //         if (icon) {
        //             icon.style.transform = 'scale(1.2) rotate(10deg)';
        //         }
        //         this.style.background = 'rgba(102, 126, 234, 0.05)';
        //         this.style.borderRadius = '15px';
        //         this.style.padding = '1rem 1rem 1rem 2rem';
        //     });
            
        //     item.addEventListener('mouseleave', function() {
        //         const icon = this.querySelector('i');
        //         if (icon) {
        //             icon.style.transform = 'scale(1) rotate(0deg)';
        //         }
        //         this.style.background = 'transparent';
        //         this.style.padding = '0 0 1.5rem 0';
        //     });
        // });

        // Smooth scrolling for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

        // Enhanced back button effect
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.addEventListener('mouseenter', function() {
                this.querySelector('i').style.transform = 'translateX(-10px)';
            });
            
            backBtn.addEventListener('mouseleave', function() {
                this.querySelector('i').style.transform = 'translateX(0)';
            });
        }

        // Profile image interaction
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.addEventListener('mouseenter', function() {
                this.style.animation = 'none';
                this.style.transform = 'scale(1.1) rotate(10deg)';
            });
            
            profileImg.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
            
            profileImg.addEventListener('click', function() {
                this.style.animation = 'bounceIn 1s ease';
                setTimeout(() => {
                    this.style.animation = 'none';
                }, 1000);
            });
        }

        // Section titles parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const sectionTitles = document.querySelectorAll('.section-title');
            
            sectionTitles.forEach(title => {
                const rect = title.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const parallax = (window.innerHeight - rect.top) * 0.1;
                    title.style.transform = `translateY(${parallax}px)`;
                }
            });
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Easter egg: Konami code
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                               'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                               'KeyB', 'KeyA'];

        document.addEventListener('keydown', function(e) {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join('') === konamiSequence.join('')) {
                // Easter egg activation
                document.body.style.animation = 'gradientShift 2s ease infinite';
                
                // Create rainbow particles
                const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', 
                               '#0000ff', '#4b0082', '#9400d3'];
                
                for (let i = 0; i < 50; i++) {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: fixed;
                        width: 10px;
                        height: 10px;
                        background: ${colors[Math.floor(Math.random() * colors.length)]};
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 9999;
                        left: ${Math.random() * 100}vw;
                        top: ${Math.random() * 100}vh;
                        animation: particleFloat 3s ease-out forwards;
                    `;
                    document.body.appendChild(particle);
                    
                    setTimeout(() => particle.remove(), 3000);
                }
                
                konamiCode = [];
                
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 3000);
            }
        });

        // Performance optimization: Lazy loading for heavy animations
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (reduceMotion.matches) {
            // Disable animations for users who prefer reduced motion
            document.documentElement.style.setProperty('--animation-duration', '0s');
        }

        // Dynamic theme based on time of day
        function setThemeByTime() {
            const hour = new Date().getHours();
            const root = document.documentElement;
            
            if (hour >= 6 && hour < 18) {
                // Day theme - brighter colors
                root.style.setProperty('--primary-color', '#667eea');
                root.style.setProperty('--secondary-color', '#764ba2');
            } else {
                // Night theme - darker, more vibrant colors
                root.style.setProperty('--primary-color', '#4c63d2');
                root.style.setProperty('--secondary-color', '#5a3d7a');
            }
        }

        setThemeByTime();
        
        // Update theme every hour
        setInterval(setThemeByTime, 3600000);

        console.log(`
        🎉 สวัสดีครับ! ยินดีต้อนรับสู่ Portfolio ของผม
        
        ถ้าคุณเป็นนักพัฒนาและกำลังดูโค้ดอยู่ 
        ลองพิมพ์ Konami Code ดูสิ: ↑↑↓↓←→←→BA
        
        หรือถ้าสนใจร่วมงานกับผม ติดต่อได้ที่:
        📧 suphakit@fittoode.com
        💼 linkedin.com/in/suphakit
        
        Happy Coding! 🚀
        `);
    
    // Contact Form validation
document.querySelector('#contact-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  // ตรวจสอบข้อมูลและแสดงข้อความสำเร็จ
  alert('ส่งข้อความเรียบร้อยแล้ว!');
});

// Experience carousel logic
document.addEventListener('DOMContentLoaded', function() {
  const cards = Array.from(document.querySelectorAll('.exp-card'));
  let current = 0;

  function updateCarousel() {
    cards.forEach((card, idx) => {
      card.classList.remove('active', 'prev', 'next', 'before', 'after');
      if (idx === current) {
        card.classList.add('active');
      } else if (idx === current - 1) {
        card.classList.add('prev');
      } else if (idx === current + 1) {
        card.classList.add('next');
      } else if (idx < current - 1) {
        card.classList.add('before');
      } else if (idx > current + 1) {
        card.classList.add('after');
      }
    });
  }

  updateCarousel();

  document.getElementById('exp-prev').addEventListener('click', function() {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  document.getElementById('exp-next').addEventListener('click', function() {
    current = (current + 1) % cards.length;
    updateCarousel();
  });

  // Optional: swipe support for mobile
  let startX = null;
  document.getElementById('exp-carousel').addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });
  document.getElementById('exp-carousel').addEventListener('touchend', function(e) {
    if (startX !== null) {
      let endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) {
        current = (current - 1 + cards.length) % cards.length;
        updateCarousel();
      } else if (startX - endX > 50) {
        current = (current + 1) % cards.length;
        updateCarousel();
      }
      startX = null;
    }
  });
});