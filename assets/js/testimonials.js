// Função para iniciar a rolagem dos depoimentos
function iniciarRolagemDepoimentos() {
    const linhaDepoimentos1 = document.querySelector('.testmonials__card__line1');
    const linhaDepoimentos2 = document.querySelector('.testmonials__card__line2');

    let posicaoRolagem1 = 0;
    let posicaoRolagem2 = 0;

    // Função para atualizar a rolagem dos depoimentos
    function atualizarRolagem() {
        posicaoRolagem1 += 1; // Velocidade de rolagem para a primeira linha
        posicaoRolagem2 -= 1; // Velocidade de rolagem para a segunda linha

        linhaDepoimentos1.style.transform = `translateX(${posicaoRolagem1}px)`;
        linhaDepoimentos2.style.transform = `translateX(${posicaoRolagem2}px)`;

        // Reiniciar a rolagem ao atingir um certo ponto para criar um loop contínuo
        if (posicaoRolagem1 > 10) { 
            posicaoRolagem1 = -1000;
        }
        if (posicaoRolagem2 < -1000) {
            posicaoRolagem2 = 10;
        }

        requestAnimationFrame(atualizarRolagem); // Continuar a animação
    }

    atualizarRolagem(); // Iniciar a animação
}

// Iniciar a rolagem dos depoimentos ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarRolagemDepoimentos);
