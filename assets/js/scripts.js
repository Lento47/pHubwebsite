// Initialize AOS
AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-cubic'
});

// Simple scroll reveal effect (Navbar padding)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-4');
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('py-4');
        nav.classList.remove('shadow-lg');
    }
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themes = ['classic', 'theme-midnight', 'theme-growth'];
let currentThemeIndex = parseInt(localStorage.getItem('theme-index')) || 0;

// Apply saved theme on load
if (currentThemeIndex > 0) {
    body.classList.add(themes[currentThemeIndex]);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Remove current class (if not classic)
        if (currentThemeIndex > 0) {
            body.classList.remove(themes[currentThemeIndex]);
        }
        
        // Cycle to next
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        
        // Add new class (if not classic)
        if (currentThemeIndex > 0) {
            body.classList.add(themes[currentThemeIndex]);
        }
        
        // Save preference
        localStorage.setItem('theme-index', currentThemeIndex);
        
        // Feedback animation
        themeToggle.classList.add('scale-75');
        setTimeout(() => themeToggle.classList.remove('scale-75'), 100);
    });
}
