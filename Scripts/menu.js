// Condição de quando clicar no botão do menu

// margin do body vai para 2% em tudo e fechar o menu com width 1px e padding de 5px

var menuSide = document.getElementById("btnOpenClose");
var menu = document.querySelector(".contact--hd");
var page = document.querySelector(".page")

menu.classList.remove("hiden") // Menu Hiden


const open = menuSide.addEventListener('click', () => {

  for(i=open; i != close; i) {
    i[open] = () => {
      menu.classList.add("hiden")
      page.style.margin="3% 2% 0" 
      close = false
    }
    i[close] = () => {
      menu.classList.add("hiden")
    page.style.margin="50px 2% 0 calc(250px + 2%)"
    open = false
    }
  }

  // if (open) {
  //   menu.classList.add("hiden")
  //   page.style.margin="3% 2% 0" 
  //   close = false
  // }
  // else if (close) {
  //   menu.classList.add("hiden")
  //   page.style.margin="50px 2% 0 calc(250px + 2%)"
  //   open = false
  // }

})

