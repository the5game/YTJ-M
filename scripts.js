// Improved scripts.js with event delegation and better error handling
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');

    // Event delegation for menu toggle
    document.addEventListener('click', (event) => {
        // Check if the click is on the menu toggle
        if (event.target.matches('.menu-toggle')) {
            toggleMenu();
        }
        
        // Close menu when clicking outside if it's active
        if (sidebar && sidebar.classList.contains('active') && 
            !event.target.closest('.sidebar') && 
            event.target !== menuToggle) {
            sidebar.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '☰';
            }
        }
    });

    // Responsive logging (optional)
    window.addEventListener('resize', () => {
        console.log('Screen width:', window.innerWidth);
    });
});

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!sidebar || !menuToggle) {
        console.warn('Menu elements not found');
        return;
    }

    sidebar.classList.toggle('active');
    menuToggle.innerHTML = sidebar.classList.contains('active') ? '✕' : '☰';
}

// Add form validation for contact form (if implemented)
function validateContactForm() {
    const form = document.getElementById('contact-form');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const errorElement = document.getElementById('form-error');

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errorElement.textContent = 'Veuillez entrer une adresse email valide.';
        return false;
    }

    if (message.value.trim().length < 10) {
        errorElement.textContent = 'Votre message est trop court.';
        return false;
    }

    errorElement.textContent = '';
    return true;
}
