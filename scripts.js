// Fonction pour basculer le menu
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    // Debug log
    console.log('Toggle menu clicked');
    console.log('Sidebar:', sidebar);
    console.log('Menu toggle:', menuToggle);

    if (sidebar && menuToggle) {
        sidebar.classList.toggle('active');

        // Changer l'icône
        if (sidebar.classList.contains('active')) {
            menuToggle.innerHTML = '✕';
        } else {
            menuToggle.innerHTML = '☰';
        }
    } else {
        console.error('Impossible de trouver la sidebar ou le bouton de menu');
    }
}

// Événements pour fermer le menu
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');

    // Debug log
    console.log('DOM loaded');
    console.log('Sidebar:', sidebar);
    console.log('Menu toggle:', menuToggle);
    console.log('Content:', content);

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fermer le menu si on clique en dehors
    if (content) {
        content.addEventListener('click', () => {
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (menuToggle) {
                    menuToggle.innerHTML = '☰';
                }
            }
        });
    }
});

// Log des dimensions de l'écran pour débogage
window.addEventListener('resize', () => {
    console.log('Largeur de l\'écran:', window.innerWidth);
});
