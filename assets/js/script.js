

/**=========== ICONE DE MENU DO NAVBAR  ========**/

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

//EVENTO DE CLICK NO MENU ICON, AO ALTERNAR O HEADER DA PAGINA E O ICON
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



/*=========****** EFEITO DO BACKGROUND DO HEADER AO ROLAR PARA BAIXO OU CIMA*****=====*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {

sections.forEach(sec  => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        })
    }
})

    //*************=====BACKGROUND DO HEADER======***** */
let header = document.querySelector(".header");

header.classList.toggle('sticky', window.scrollY > 100);


/**=========== remove menu icon navbar quando clica no link do navbar  (scroll) ========**/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

}

//=====****BIBLIOTECA DE ANIMAÇÃO DE ROLAGEM SCROLL REVEAL****=====//

ScrollReveal({
//reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100

});

// INDICA A POSIÇÃO DE ORIGEM DA ANIMAÇÃO
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .portfolio-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, home-content p, .about-content', { origin: 'right' });