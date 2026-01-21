document.addEventListener('DOMContentLoaded', () => {
    // dropdow da experiencia
    const itensLinhaTempo = document.querySelectorAll('.item-linha-tempo');

    itensLinhaTempo.forEach(item => {
        const cabecalho = item.querySelector('.cabecalho-dropdown');
        cabecalho.addEventListener('click', () => {
            item.classList.toggle('ativo');
        });
    });

    // carrossel de projetos
    const trilho = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.btn-nav.anterior');
    const btnProximo = document.querySelector('.btn-nav.proximo');

    if (trilho && btnAnterior && btnProximo) {
        btnProximo.addEventListener('click', () => {
            // rola pra direita, largura do card + gap
            trilho.scrollBy({ left: 324, behavior: 'smooth' });
        });

        btnAnterior.addEventListener('click', () => {
            // rola pra esquerda
            trilho.scrollBy({ left: -324, behavior: 'smooth' });
        });
    }
});