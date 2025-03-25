function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Toggle la classe 'active' sur la sidebar
    sidebar.classList.toggle('active');
    
    // Modifier le texte/icône du bouton de menu
    if (sidebar.classList.contains('active')) {
        menuToggle.innerHTML = '×'; // Croix pour fermer
    } else {
        menuToggle.innerHTML = '☰'; // Hamburger menu
    }
}

// Ajouter un événement pour fermer le menu si on clique en dehors
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    content.addEventListener('click', () => {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            document.querySelector('.menu-toggle').innerHTML = '☰';
        }
    });
});
