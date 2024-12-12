function openImage(nImage) {
   //pegar o ID das imagens identando com a numeracao da imagem (project-1 com img-1)... testar com switch
   const pictures = document.getElementById('project-' + nImage)
   // condição de quando clicado na imagem criar uma classe 
   if (nImage === nImage) {
      pictures.classList.add("showImage")

      document.querySelector('.closeBtn').addEventListener("click", () => {
         console.log('1111111111 asdi asdias')
         pictures.classList.remove("showImage")
      });
      if (event.keyCode == 27) {
         console.log('2222222222222 asdi asdias')
         pictures.classList.remove("showImage")
      }
   }

}


