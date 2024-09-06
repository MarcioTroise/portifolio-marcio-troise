document.addEventListener("DOMContentLoaded", function() {
   const containers = document.querySelectorAll('.description');
   // const portfolio = document.querySelectorAll('#portfolio');

   // Função para criar uma forma geométrica dentro de um container
   function createShape(container) {
      const shape = document.createElement('div');
      
      // Definir tamanho aleatório para as formas
      const size = Math.random() * 80 + 20; // Tamanho entre 50px e 150px
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.position = 'absolute';
      
      shape.classList.add('circle');

      // Definir posição aleatória dentro do container (inicial embaixo)
      const posX = Math.random() * (container.clientWidth - size);
      shape.style.left = `${posX}px`;
      shape.style.top = `${container.clientHeight}px`; // Começa de baixo

      // Cor de fundo aleatória
      const colors = [ '#250937f2', '#0188bd', '#6dfff3'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      shape.style.backgroundColor = randomColor;

      // Adicionar classes de animação e forma
      shape.classList.add('shape');
      container.appendChild(shape);

      // Aplicar a animação de movimento
      shape.style.animation = `moveUp ${Math.random() * 15 + 5}s linear infinite`;
   }

   // Iterar por todos os containers e adicionar formas a cada um
   containers.forEach(function(container) {
      for (let i = 0; i < 30; i++) {
         createShape(container);
      }
   });
   // portfolio.forEach(function(container) {
   //    // Gerar quantidades de formas geométricas aleatórias para cada container
   //    let variableSize =  (containers[0].clientWidth - containers[0].clientHeight) / 5
   //    console.log('TESTE S',variableSize)

   //    for (let i = 0; i < variableSize; i++) {
   //       createShape(container);
   //    }
   // });
});
