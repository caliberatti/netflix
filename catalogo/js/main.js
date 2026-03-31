import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const profileDataMap = {
        'Rogério': './data-rogerio.js',
        'Carolina': './data-carolina.js',
        'Gabriel': './data-gabriel.js',
        'Lucas': './data-lucas.js'
    };

    const dataModulePath = profileDataMap[nomePerfil] || './data.js';

    import(dataModulePath)
        .then(module => {
            const categories = module.categories;
            const container = document.getElementById('main-content');

            if (!container) return;

            categories.forEach(category => {
                const carousel = createCarousel(category);
                container.appendChild(carousel);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar data.js para o perfil:', nomePerfil, error);
        });
});
