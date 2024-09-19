// Array de URLs das imagens de fundo
const backgrounds = [
    '../Imagens/Quem Somos/1.png',
    '../Imagens/Quem Somos/2.png',
    '../Imagens/Quem Somos/3.png',
    '../Imagens/Quem Somos/4.png',
    '../Imagens/Quem Somos/5.png',

];

let currentIndex = 0;

// Seleciona a div onde a imagem de fundo será aplicada
const fotoFundoDiv = document.querySelector('.Foto-Fundo');

function changeBackground() {
    // Altera a imagem de fundo da div específica
    fotoFundoDiv.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    
    // Atualiza o índice da imagem atual
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Define o intervalo de troca 
setInterval(changeBackground, 10000);

// Define a imagem inicial
changeBackground();





ScrollReveal().reveal('.section', {
    duration: 1000, // Duração da animação
    distance: '50px', // Distância que o elemento se moverá
    origin: 'bottom', // O ponto de origem da animação (de baixo para cima)
    easing: 'ease-in-out', // Efeito de suavização
    reset: true // Define se a animação deve reiniciar ao sair e voltar para a tela
});

