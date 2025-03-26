function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    sidebar.classList.toggle('active');
    
    // Changer l'icône du menu
    if (sidebar.classList.contains('active')) {
        menuToggle.innerHTML = '✕'; // Croix pour fermer
    } else {
        menuToggle.innerHTML = '☰'; // Hamburger pour ouvrir
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    if (content) {
        content.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    }
});

// Écoute supplémentaire pour fermer le menu lors d'un clic en dehors
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (
        sidebar && 
        sidebar.classList.contains('active') && 
        !sidebar.contains(event.target) && 
        event.target !== menuToggle
    ) {
        sidebar.classList.remove('active');
        menuToggle.innerHTML = '☰';
    }
});
