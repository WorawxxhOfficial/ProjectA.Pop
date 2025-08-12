 // Intersection Observer สำหรับ animate section เมื่อ scroll ถึง
    document.addEventListener('DOMContentLoaded', function () {
      // Fade-in animation for timeline/work cards
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
          }
        });
      }, { threshold: 0.2 });
      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

      // Animate skill bars
      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar').forEach(bar => {
              bar.style.width = bar.dataset.skill + '%';
            });
          }
        });
      }, { threshold: 0.4 });
      document.querySelectorAll('#skills').forEach(el => skillObserver.observe(el));
    });

    // JS สำหรับ Contact Popup
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('thankPopup').classList.remove('hidden');
      this.reset();
    });

    // เปลี่ยน background body ตาม section ที่ scroll ถึง
    const sectionColors = {
      home: "#181f2a",
      about: "#fff",
      education: "#e0e7ff",
      works: "#a5b4fc",
      skills: "#6366f1",
      contact: "#232a3a"
    };
    window.addEventListener('scroll', function () {
      const sections = ["home", "about", "education", "works", "skills", "contact"];
      let found = false;
      for (let id of sections) {
        const el = document.getElementById(id);
      }
    });

    // ...existing code...

// Section fade-in on scroll
document.addEventListener('scroll', function () {
  document.querySelectorAll('section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      sec.classList.add('visible');
    }
  });
});

// Scroll indicator
window.addEventListener('scroll', function () {
  const scrollIndicator = document.getElementById('scrollIndicator');
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const percent = docHeight ? (scrollTop / docHeight) * 100 : 0;
  scrollIndicator.style.width = percent + '%';
});

// stam.js
document.addEventListener('scroll', function () {
  document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      sec.classList.add('visible');
    }
  });
});

//NameAni
document.addEventListener('DOMContentLoaded', function () {
  const text = "Suphakit Sanwongkham";
  const el = document.getElementById('NameAni');
  let i = 0;
  function type() {
    if (el && i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
});

//Project Manager
document.addEventListener('DOMContentLoaded', function () {
  const text = "Project Manager | Product Owner";
  const el = document.getElementById('typewriter');
  let i = 0;
  function type() {
    if (el && i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
});

// Typewriter effect for details section
document.addEventListener('DOMContentLoaded', function () {
  const text = "Tomorrow doesn’t care about your excuses. It will arrive anyway,and it’ll show you the results of what you did—or didn’t—do today.";
  const el = document.getElementById('details');
  let i = 0;
  function type() {
    if (el && i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
});

// stam.js
window.addEventListener('scroll', function () {
  const home = document.getElementById('home');
  if (home) {
    home.style.backgroundPositionY = -(window.scrollY * 0.3) + 'px';
  }
});