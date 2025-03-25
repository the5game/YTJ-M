function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Ajout de console.log pour le débogage
    console.log('Toggle menu called');
    console.log('Sidebar:', sidebar);
    console.log('Menu Toggle:', menuToggle);
    
    // Toggle la classe 'active' sur la sidebar
    sidebar.classList.toggle('active');
    
    // Modifier le texte/icône du bouton de menu
    if (sidebar.classList.contains('active')) {
        menuToggle.innerHTML = '×'; // Croix pour fermer
        console.log('Menu opened');
    } else {
        menuToggle.innerHTML = '☰'; // Hamburger menu
        console.log('Menu closed');
    }
}

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
