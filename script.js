
/* =====================================
   1. ATUALIZAR O ANO DO RODAPÉ
===================================== */

// Busca o elemento do ano
const elementoAno = document.getElementById("ano");

// Atualiza automaticamente
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}


/* =====================================
   2. CONFIGURAR O MENU MOBILE
===================================== */

// Busca o botão e o menu
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

// Função para abrir ou fechar o menu
function alterarMenu(abrir) {

    if (!botaoMenu || !menu) return;

    menu.classList.toggle("aberto", abrir);

    // Atualiza o símbolo
    botaoMenu.textContent = abrir ? "✕" : "☰";

    // Atualiza a acessibilidade
    botaoMenu.setAttribute(
        "aria-label",
        abrir ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.setAttribute(
        "aria-expanded",
        String(abrir)
    );
}


/* =====================================
   3. EVENTOS DO MENU
===================================== */

if (botaoMenu && menu) {

    // Abre ou fecha ao clicar
    botaoMenu.addEventListener("click", function() {

        const menuEstaAberto =
            menu.classList.contains("aberto");

        alterarMenu(!menuEstaAberto);

    });

    // Fecha ao clicar em um link
    const linksMenu = document.querySelectorAll(".menu a");

    linksMenu.forEach(function(link) {

        link.addEventListener("click", function() {
            alterarMenu(false);
        });

    });

    // Fecha ao pressionar Escape
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {
            alterarMenu(false);
        }

    });

}
