document.addEventListener("DOMContentLoaded", function() {
   const portfolio = document.querySelectorAll('#portfolio');

   // Função para criar uma forma geométrica dentro de um container
   function createcirclebody(container) {
      const circlebody = document.createElement('div');
      // Armazena ambos os elementos em um array
      const elements = [circlebody];
      // Definir tamanho aleatório para as formas
      const size = Math.random() * 80 + 20; // Tamanho entre 50px e 150px

      // Define a largura padrão para ambos
      elements.forEach(el => {
         el.style.height = `${size}px`;
         el.style.width = `${size}px`;
         el.classList.add('circle');
         // Aplicar a animação de movimento
         el.style.animation = `moveUp ${Math.random() * 15 + 5}s linear infinite`;
         // Tempo aleatorio para animacao
         el.style.animationDelay = `${Math.random() * 10}s`;
      });
      
      // Definir posição aleatória dentro do container (inicial embaixo)
      const posX = Math.random() * (container.clientWidth - size);
      circlebody.style.left = `${posX}px`;
      circlebody.style.top = `${container.clientHeight}px`; // Começa de baixo

      // Cor de fundo aleatória
      const colors = [ '#250937f2', '#0188bd', '#6dfff3'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      circlebody.style.backgroundColor = randomColor;

      // Adicionar classes de animação e forma
      circlebody.classList.add('circlebody');
      container.appendChild(circlebody, circlebody);
   }

   portfolio.forEach(function(container) {
      for (let i = 0; i < 180; i++) {
         createcirclebody(container);
      }
   });

   // Isso garantirá que as bolhas sejam reposicionadas quando a tela for redimensionada
   function repositionBubbles(container) {
      const bubbles = container.querySelectorAll('.circlebody');
      bubbles.forEach(function(bubble) {
         const size = parseFloat(bubble.style.width);
         const posX = Math.random() * (container.clientWidth - size);
         bubble.style.left = `${posX}px`;
      });
   }
   
   window.addEventListener('resize', function() {
      portfolio.forEach(repositionBubbles);
   });
});


const animeBubbles = document.querySelector(".bt-transition");
function toggleAnimation() {
   animeBubbles.classList.toggle('active');
}

animeBubbles.addEventListener('click', toggleAnimation);
