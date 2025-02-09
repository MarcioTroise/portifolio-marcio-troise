   // Variável global para controlar se a animação está ativada ou desativada
   let animationEnabled = true;

   // Função responsável por criar e animar os elementos dentro da #portfolio
   function animationFunction() {
      // Se a animação estiver desativada, a função não faz nada e retorna
      if (!animationEnabled) return;

      // Seleciona todos os elementos com ID #portfolio (caso existam múltiplos)
      const portfolio = document.querySelectorAll('#portfolio');

      // Função que cria um elemento animado dentro do container
      function createcirclebody(container) {
         // Cria um novo elemento div
         const circlebody = document.createElement('div');

         // Define um tamanho aleatório para o elemento (entre 20px e 100px)
         const size = Math.random() * 80 + 20;

         // Aplica tamanho e classe CSS ao elemento
         circlebody.style.height = `${size}px`;
         circlebody.style.width = `${size}px`;
         circlebody.classList.add('circle');

         // Define animação de movimento vertical com tempo aleatório
         circlebody.style.animation = `moveUp ${Math.random() * 15 + 5}s linear infinite`;
         circlebody.style.animationDelay = `${Math.random() * 10}s`;

         // Define uma posição inicial aleatória dentro do container
         const posX = Math.random() * (container.clientWidth - size);
         circlebody.style.left = `${posX}px`;
         circlebody.style.top = `${container.clientHeight}px`; // Começa de baixo

         // Define uma cor de fundo aleatória
         const colors = ['#250937f2', '#0188bd', '#6dfff3'];
         circlebody.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

         // Adiciona a classe circlebody ao elemento
         circlebody.classList.add('circlebody');

         // Adiciona o elemento ao container
         container.appendChild(circlebody);
      }

      // Para cada container encontrado, cria 180 elementos animados
      portfolio.forEach(container => {
         if (!animationEnabled) return; // Evita criar animações se já estiver desativado
         for (let i = 0; i < 180; i++) {
            createcirclebody(container);
         }
      });

      // Função para reposicionar as bolhas caso a tela seja redimensionada
      function repositionBubbles(container) {
         const bubbles = container.querySelectorAll('.circlebody');
         bubbles.forEach(bubble => {
            const size = parseFloat(bubble.style.width);
            const posX = Math.random() * (container.clientWidth - size);
            bubble.style.left = `${posX}px`;
         });
      }

      // Adiciona um evento para reposicionar bolhas quando a tela for redimensionada
      window.addEventListener('resize', function () {
         portfolio.forEach(repositionBubbles);
      });
   }

   // Adiciona o evento para iniciar a animação quando a página carregar
   document.addEventListener("DOMContentLoaded", animationFunction);

   // Seleciona o botão de ativar/desativar animação
   const animeBubbles = document.querySelector(".bt-transition");

   // Função que ativa/desativa a animação ao clicar no botão
   function toggleAnimation() {
      // Alterna a classe 'active' no botão para indicar estado ativo/inativo
      animeBubbles.classList.toggle('active');

      // Alterna a variável de controle entre verdadeiro e falso
      animationEnabled = !animationEnabled;

      // Exibe mensagem no console indicando o estado da animação
      console.log(animationEnabled ? "Animação ativada!" : "Animação desativada!");

      if (!animationEnabled) {
         // Se a animação foi desativada, remove todas as bolhas da tela
         document.querySelectorAll('.circlebody').forEach(el => el.remove());
      } else {
         // Se a animação foi ativada, recria os elementos animados
         animationFunction();
      }
   }

   // Adiciona evento de clique ao botão para ativar/desativar animação
   animeBubbles.addEventListener("click", toggleAnimation);
