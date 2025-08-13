// Navbar active state
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
// Contact form demo
document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('ขอบคุณที่ติดต่อเรา!');
    this.reset();
});