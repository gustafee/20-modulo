// Array de URLs das imagens de fundo
const backgrounds = [
    '../Imagens/abc.jpg',
    '../Imagens/aprendendo.jpg',
    '../Imagens/bibilhoteca.jpg',
    '../Imagens/estude.jpg',
    '../Imagens/formando.jpg',
    '../Imagens/livros.jpg',
    '../Imagens/notbook.jpg',
    '../Imagens/pessoas.jpg'
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

// Define o intervalo de troca (5 segundos, por exemplo)
setInterval(changeBackground, 7000);

// Define a imagem inicial
changeBackground();
