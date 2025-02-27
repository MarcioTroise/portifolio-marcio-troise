// Variável global para controlar se a animação está ativada ou desativada
let animationEnabled = true;

// Função responsável por criar e animar os elementos dentro da #portfolio
function animationFunction() {
   // Se a animação estiver desativada, a função não faz nada e retorna
   if (!animationEnabled) return;

   // Seleciona todos os elementos com ID #portfolio (caso existam múltiplos)
   const portfolio = document.querySelectorAll('#portfolio');

   function createcirclebody() {
      const circlebody = document.createElement('div');

      // Define um tamanho aleatório para o elemento (entre 20px e 100px)
      const size = Math.random() * 250 + 20;
      circlebody.style.height = `${size}px`;
      circlebody.style.width = `${size}px`;
      circlebody.classList.add('circle');

      // Animação de descida com tempo aleatório
      circlebody.style.animation = `moveDown ${Math.random() * 15 + 5}s linear infinite`;
      circlebody.style.animationDelay = `${Math.random() * 2}s`;

      // Garante que as bolhas fiquem dentro do #portfolio
      const portfolio = document.querySelector('#portfolio');
      const posX = Math.random() * (portfolio.clientWidth - size);
      circlebody.style.left = `${posX}px`;
      circlebody.style.top = `-100px`; // Começa fora da tela, acima do #portfolio

      // Define cor aleatória
      const colors = ['#250937f2', '#0188bd', '#6dfff3'];
      circlebody.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      circlebody.classList.add('circlebody');

      // Adiciona a bolha ao container
      portfolio.appendChild(circlebody);
   }

   // Para cada container encontrado, cria 180 elementos animados
   portfolio.forEach(container => {
      if (!animationEnabled) return; // Evita criar animações se já estiver desativado
      for (let i = 0; i < 220; i++) {
         createcirclebody(container);
      }
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
