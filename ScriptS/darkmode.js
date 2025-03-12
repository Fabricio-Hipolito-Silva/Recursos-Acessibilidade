// Darkmode.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkMode = document.getElementById('dark_mode');
    const body = document.body;

    // Verifica se o dark mode foi ativado antes
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleDarkMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Salva no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
