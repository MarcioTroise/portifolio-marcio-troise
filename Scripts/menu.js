// Condição de quando clicar no botão do menu
const toggleButton = document.getElementById("btnOpenClose");
const sideMenu = document.getElementById('sideMenu');
const page = document.getElementById("portfolio")
const menu = document.querySelector(".contact--hd");
const allContainers = document.getElementsByClassName(".description")

// menu.classList.remove("hiden") // Menu Hiden

// Função para alternar a visibilidade do menu
function toggleMenu() {
    sideMenu.style.transition ='2s'
    toggleButton.classList.toggle('rotate-menu');
    if (sideMenu.style.display === 'block') 
      { // Esconde o menu se ele estiver visível     
        sideMenu.style.display = 'none';
        allContainers.style.display = 'block'; 
    }
    else { // Mostra o menu se ele estiver escondido
        sideMenu.style.display = 'block'; 
        allContainers.style.display = 'none'
    } 
}

// Adiciona o evento de clique ao botão para alternar o menu
toggleButton.addEventListener('click', toggleMenu);
