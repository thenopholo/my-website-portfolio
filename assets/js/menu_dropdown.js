// Função para alternar a exibição do dropdown
function toggleDropdown() {
    var dropdown = document.getElementById("menuDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Adiciona evento de clique ao botão do menu
document.querySelector('.header__menu').addEventListener('click', function (event) {
    toggleDropdown();
    event.stopPropagation(); // Isso impede que o evento de clique se propague para o document
});

// Adiciona evento de clique ao documento
document.addEventListener('click', function (event) {
    var dropdown = document.getElementById("menuDropdown");
    // Verifica se o dropdown está aberto e se o clique foi fora do dropdown
    if (dropdown.style.display === "block" && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
