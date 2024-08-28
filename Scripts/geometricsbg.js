document.addEventListener("DOMContentLoaded", function() {
   const containers = document.querySelectorAll('.description');

   // Função para criar uma forma geométrica dentro de um container
   function createShape(container) {
      const shape = document.createElement('div');
      
      // Definir tamanho aleatório para as formas
      const size = Math.random() * 60 + 20; // Tamanho entre 50px e 150px
      shape.style.width = `${size}px`;
      shape.style.height = `4px`;

      shape.classList.add('circle');

      // Definir posição aleatória dentro do container
      const posX = Math.random() * (container.clientWidth - size); // Subtrair o tamanho para evitar overflow
      const posY = Math.random() * (container.clientHeight - size);
      shape.style.left = `${posX}px`;
      shape.style.top = `${posY}px`;
      
      // Cor de fundo aleatória
      const colors = [ '#250937f2', '#0188bd'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];  
      shape.style.backgroundColor = randomColor;

      shape.classList.add('shape'); // Adicionar a classe 'shape' ao final
      container.appendChild(shape);
   }
   // Iterar por todos os containers e adicionar formas a cada um
   containers.forEach(function(container) {
      // Gerar quantidades de formas geométricas aleatórias para cada container
      // let variableSize =  (containers[0].clientHeight -  containers[0].clientWidth) / 10
      // console.log('TESTE S',(containers[0]))
      for (let i = 0; i < 70; i++) {
         createShape(container);
      }
   });

});
