// Dynamic UI: Animate About section on scroll
window.addEventListener('scroll', function() {
    const about = document.getElementById('about');
    const rect = about.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        about.style.boxShadow = '0 4px 32px rgba(60,60,120,0.13)';
        about.style.background = 'rgba(240,248,255,0.98)';
        about.style.transition = 'box-shadow 0.4s, background 0.4s';
    } else {
        about.style.boxShadow = '';
        about.style.background = '';
    }
});

// Smooth scroll for navigation (if you add nav links)
// Example: document.querySelector('a[href="#about"]').onclick = (e) => { ... }


// change