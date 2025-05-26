// Script sederhana: animasi saat scroll ke section
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        if (top >= offset) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
});

// Awal animasi diset
document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(20px)';
    sec.style.transition = 'all 0.6s ease-out';
});
