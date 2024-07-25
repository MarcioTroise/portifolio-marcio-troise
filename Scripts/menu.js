// Condição de quando clicar no botão do menu

// margin do body vai para 2% em tudo e fechar o menu com width 5px

var menuSide = document.getElementById("btnOpenClose");
var menuClass = document.querySelector(".container-menu");

menuClass.classList.remove("hiden")

menuSide.addEventListener("click", (() => {
    menuClass.classList.add("hiden")

    if(!menuClass) console.log("fechando...")

}));
