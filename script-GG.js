document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible to save performance
                // observer.unobserve(entry.target); 
                // หากต้องการให้เล่นแอนิเมชันทุกครั้งที่ scroll เข้ามา ให้คอมเมนต์บรรทัดนี้ทิ้ง
            } else {
                // ถ้าอยากให้การ์ดกลับไปซ่อนเมื่อ scroll ออกไป
                // entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.4 // Trigger when 40% of the element is in view (ปรับได้ตามความเหมาะสม)
    });

    featureCards.forEach(card => {
        card.classList.add('hidden'); // Initially hide all cards
        observer.observe(card); // Start observing each card
    });
});