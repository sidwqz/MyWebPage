const navbar = document.getElementById('navbar');
window.onscroll= function () {
    scrolllFunction()
}

function scrolllFunction() {
    if (document.body.scrollTop>20 || document.body.scrollTop<20) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')

    }
    
}

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
}
const scrollRevealtransparent={
    distance:"50px",
    opacity: 0.2,
    duration:1000
}

ScrollReveal().reveal(".header h2",scrollRevealOption)
ScrollReveal().reveal(".header h1",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".header h3",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal(".header .card-tags",{...scrollRevealtransparent,delay:1000})
ScrollReveal().reveal("section h1",scrollRevealOption)
ScrollReveal().reveal("section h2",{...scrollRevealOption,delay:500})
ScrollReveal().reveal("section .item",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal("section .row",{...scrollRevealOption,delay:2000})


function resizeContainer() {
    const container = document.getElementById('container');
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Ajuste o tamanho do container conforme necessário
    container.style.fontSize = width < 600 ? '20px' : '40px';
    container.style.backgroundColor = width < 600 ? 'lightcoral' : 'lightblue';
}

// Chama a função uma vez no carregamento da página
resizeContainer();

// Adiciona o listener para redimensionamento da janela
window.addEventListener('resize', resizeContainer);

  function ajustarImagem() {
            const imagem = document.getElementById('logo');
            imagem.style.width = window.innerWidth + 'px';
            imagem.style.height = 'auto'; // Manter a proporção
        }

        window.addEventListener('resize', ajustarImagem);
      
        window.addEventListener('load', ajustarImagem);
// Odeio Iphones
window.addEventListener('resize', function() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    let imgContainer = document.querySelector('.img-container');
    
    // Ajuste de tamanho do container conforme largura e altura
    imgContainer.style.width = `${largura}px`;
    imgContainer.style.height = `${altura}px`;
});
document.body.style.paddingTop = `${window.safeAreaInsets.top}px`;
document.body.style.paddingBottom = `${window.safeAreaInsets.bottom}px`;

let currentIndex = 0;
const images = document.querySelectorAll("#sliderImages img");
const sliderImages = document.getElementById('sliderImages');


let currentSlide = 0;
const image = document.querySelectorAll(".slider-images");
const imageContainer = document.getElementById("imageContainer");

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    } else if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    
    const offset = -currentSlide * 100; // Para mover a imagem 100% à esquerda ou direita
    imageContainer.style.transform = `translateX(${offset}%)`;
}