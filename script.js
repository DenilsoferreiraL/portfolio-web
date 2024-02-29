function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');
    nav.classList.add('animate'); // Adiciona a classe de animação

    // Remove a classe de animação após 0.3s
    setTimeout(function() {
        nav.classList.remove('animate');
    }, 300);
}

