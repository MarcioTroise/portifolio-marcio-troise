// Condição de quando clicar no botão do menu
const toggleButton = document.getElementById("btnOpenClose");
const sideMenu = document.getElementById('sideMenu');
const page = document.getElementById("portfolio")
const menu = document.querySelector(".contact--hd");

// menu.classList.remove("hiden") // Menu Hiden

// Função para alternar a visibilidade do menu
function toggleMenu() {
    sideMenu.style.transition ='2s'
    toggleButton.classList.toggle('rotate-menu');
    if (sideMenu.style.display === 'block') 
      { // Esconde o menu se ele estiver visível     
        sideMenu.style.display = 'none';
    }
    else { // Mostra o menu se ele estiver escondido
        sideMenu.style.display = 'block'; 
    }
}

// Adiciona o evento de clique ao botão para alternar o menu
toggleButton.addEventListener('click', toggleMenu);
