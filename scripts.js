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

    // Open external links in new tab
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            window.open(link.href, '_blank', 'noopener,noreferrer');
            e.preventDefault();
        });
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

// Form validation for contact form
function validateContactForm() {
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const errorElement = document.getElementById('form-error');

    // Reset previous error
    errorElement.textContent = '';

    // Name validation
    if (name.value.trim().length < 2) {
        errorElement.textContent = 'Veuillez entrer un nom valide.';
        return false;
    }

    // Email validation
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errorElement.textContent = 'Veuillez entrer une adresse email valide.';
        return false;
    }

    // Message validation
    if (message.value.trim().length < 10) {
        errorElement.textContent = 'Votre message est trop court.';
        return false;
    }

    // Optional: You might want to add form submission logic here
    alert('Formulaire soumis avec succès !');
    return true;
}

// Attach form validation to contact form if it exists
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!validateContactForm()) {
                e.preventDefault();
            }
        });
    }
});
