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