const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

// Verifica se o elemento do menu existe antes de adicionar o evento
if (menuHamburguer && nav) {
    menuHamburguer.addEventListener('click', () => {
        toggleMenu();
    });

    function toggleMenu() {
        menuHamburguer.classList.toggle('change');
        nav.classList.toggle('show'); // Adiciona ou remove a classe 'show'
    }

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!menuHamburguer.contains(event.target) && !nav.contains(event.target) && nav.classList.contains('show')) {
            toggleMenu();
        }
    });
}

// Adiciona um evento ao botão "Send Message" para mostrar um alerta
const sendMessageButton = document.querySelector('.contact .btn');

if (sendMessageButton) {
    sendMessageButton.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o envio do formulário
        alert('Esta funcionalidade está fora do ar no momento.');
    });
}
