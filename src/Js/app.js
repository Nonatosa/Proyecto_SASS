document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    navegacionFija();
    hoverAct();
    scrollNav();
})

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach (link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const pointer = e.target.getAttribute('href');
            const section = document.querySelector(pointer);

            section.scrollIntoView({behavior: 'smooth'});
        })
    })
}

function hoverAct(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        let actual = ''; 

        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if( window.scrollY >= (sectionTop - sectionHeight / 3) ){
                actual = section.id;
            }
        })

        navLinks.forEach( link => {
            link.classList.remove('active');
            
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active');
            }
        })
    })
}

function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.info-festival');

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 90){
            header.classList.add('fixed');
        }else {
            header.classList.remove('fixed');
        }
    })

}

function crearGaleria() {
    const imgTotales = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= imgTotales; i++) {
        const img = document.createElement('IMG');

        img.src = `src/img/gallery/full/${i}.jpg`;
        img.alt = `Imagen de galería: ${i}`;

        // Event handler
        img.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(img);
    }
}

function mostrarImagen(i) {
    const img = document.createElement('IMG');
    img.src = `src/img/gallery/full/${i}.jpg`;
    img.alt = `Imagen de galería: ${i}`;

    const modal = document.createElement('DIV');
    modal.classList.add('modal');

    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    modal.onclick = cerrarModal;

    body.appendChild(modal);
    modal.appendChild(img);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    const overflow = document.querySelector('body');
    modal.classList.add('fadeOut');

    setTimeout(() => {
        overflow?.classList.remove('overflow-hidden');
        modal?.remove();
    }, 500);

}



