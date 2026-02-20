// Improved JavaScript with null checks, proper aria-expanded initialization, ESC key support, and click-outside menu closure

// Menu initialization
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menu.style.display = isExpanded ? 'none' : 'block';
    });

    // ESC key support
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.style.display === 'block') {
            menuToggle.setAttribute('aria-expanded', 'false');
            menu.style.display = 'none';
        }
    });

    // Click outside menu closure
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target) && menu.style.display === 'block') {
            menuToggle.setAttribute('aria-expanded', 'false');
            menu.style.display = 'none';
        }
    });
}