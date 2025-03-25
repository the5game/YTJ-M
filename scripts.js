function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    if (content) {
        content.addEventListener('click', () => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    }
});
// Ajouter un événement pour fermer le menu si on clique en dehors
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const menuToggle = document.querySelector('.menu-toggle');
    
    console.log('DOM Loaded - Initializing event listeners');
    
    // Vérifier si les éléments existent
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
        console.log('Click event added to menu toggle');
    } else {
        console.error('Menu toggle button not found');
    }
    
    if (content) {
        content.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                menuToggle.innerHTML = '☰';
                console.log('Clicked outside, menu closed');
            }
        });
    } else {
        console.error('Content area not found');
    }
});
