// Condição de quando clicar no botão do menu

// margin do body vai para 2% em tudo e fechar o menu com width 5px

var menu = document.getElementById("btnOpenClose");

function openCloseMenu(open, close) {
    let openMenu, closeMenu
    openMenu = open
    closeMenu = close

    if (open) {
        console.log("Abriu")
        console.log("menuu",menu)
    }
    else if (close) {
        console.log("Fechou!")
        return close
    }
    console.log(open, "ssssssss")

}

openCloseMenu()