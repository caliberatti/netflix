const button = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
    // 'ark' é tratado como 'dark' para manter compatibilidade com as variações do pedido
    const normalized = theme === 'ark' ? 'dark' : theme;

    if (normalized === 'light') {
        root.classList.add('light');
        button.setAttribute('aria-label', 'Alternar para modo escuro');
    } else {
        root.classList.remove('light');
        button.setAttribute('aria-label', 'Alternar para modo claro');
    }

    localStorage.setItem('theme', normalized);
}

const storedTheme = localStorage.getItem('theme');
applyTheme(storedTheme || 'dark');

button.addEventListener('click', () => {
    const nextTheme = root.classList.contains('light') ? 'dark' : 'light';
    applyTheme(nextTheme);
});