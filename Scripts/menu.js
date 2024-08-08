// Condição de quando clicar no botão do menu

// margin do body vai para 2% em tudo e fechar o menu com width 1px e padding de 5px

var menuSide = document.getElementById("btnOpenClose");
var menuClass = document.querySelector(".container-menu");

menuClass.classList.remove("hiden")

document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

var links = document.querySelectorAll(".menu-principal a");
for (i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
  }
}

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};
