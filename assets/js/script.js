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

