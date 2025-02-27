// Seleciona os elementos do menu
const toggleButton = document.getElementById("btnOpenClose");
const sideMenu = document.getElementById("sideMenu");
const menuLinks = document.querySelectorAll("#sideMenu a"); // Seleciona todos os links dentro do menu

// Função para alternar a visibilidade do menu
function toggleMenu() {
    toggleButton.classList.remove('rotate-menu');
    if (sideMenu.style.display === 'block') { // Esconde o menu se ele estiver visível     
        sideMenu.style.display = 'none';
        toggleButton.classList.toggle('rotate-menu');
    } else { // Mostra o menu se ele estiver escondido
        sideMenu.style.display = 'block'; 
    }
}

// Adiciona o evento de clique ao botão para alternar o menu
toggleButton.addEventListener('click', toggleMenu);

// Adiciona o evento de clique a cada link dentro do menu para fechá-lo
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.style.display = 'none';
        toggleButton.classList.toggle('rotate-menu');
    });
});

//Dark mode
const toggleLightDark = document.getElementById("darkModeToggle");

toggleLightDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleLightDark.textContent = document.body.classList.contains("dark-mode") 
        ? "☀️ Light Mode" 
        : "🌙 Dark Mode";
});