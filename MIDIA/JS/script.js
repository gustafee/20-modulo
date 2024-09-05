// Array de URLs das imagens de fundo
const backgrounds = [
    '../Imagens/quemsomos.png',
    '../Imagens/trilhas.png',
    '../Imagens/clientes.png',
    '../Imagens/perguntas.png',
    '../Imagens/valor.png',

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
