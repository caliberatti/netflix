console.log("Página inicial carregada.");

document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelectorAll('.profile');

    profileCards.forEach(card => {
        const link = card.querySelector('a');
        const img = card.querySelector('img');
        const nameEl = card.querySelector('p');

        if (!link || !img || !nameEl) return;

        link.addEventListener('click', () => {
            const nome = nameEl.textContent.trim();
            const imagem = img.src;

            localStorage.setItem('perfilAtivoNome', nome);
            localStorage.setItem('perfilAtivoImagem', imagem);
        });
    });
});
