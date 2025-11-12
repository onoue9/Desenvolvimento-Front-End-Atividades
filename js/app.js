import { homePage } from './home.js';
import { projetosPage } from './projetos.js';
import { cadastroPage } from './cadastro.js';
import { initCadastroJS } from './cadastro.js';

const mainContent = document.getElementById('main-content');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

// === Alternância de tema ===
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Verifica preferência salva ou do sistema
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplica tema inicial
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    toggle.textContent = currentTheme === 'dark' ? '🌕' : '🌑';

    // Alterna tema ao clicar
    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggle.textContent = isDark ? '🌕' : '🌑';
    });
}

// Chame isso após renderizar o header

function renderHeader() {
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-custom shadow-none border-0" aria-label="Navegação principal">
        <div class="container-fluid px-3 px-md-5">
            <div class="row w-100 align-items-center g-0">
                <!-- Coluna esquerda: título da ONG -->
                <div class="col-6">
                    <button class="navbar-brand bg-transparent border-0 text-dark fw-bold fs-5 me-0 p-0 text-start"
                            onclick="navegar('home')"
                            style="white-space: normal; line-height: 1.3; word-wrap: break-word;"
                            aria-label="Ir para a página inicial">
                        Associação Semente de Empoderamento
                    </button>
                </div>
                
                <!-- Coluna direita: hambúrguer, menu e botão de tema -->
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <button id="theme-toggle" class="btn btn-sm btn-outline-secondary me-2" 
                            aria-label="Alternar entre modo claro e escuro">
                        🌓
                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" aria-controls="navbarNav" 
                            aria-expanded="false" aria-label="Alternar navegação">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <button class="nav-link bg-transparent border-0 text-dark mx-2 p-0 text-start" 
                                        onclick="navegar('home')" 
                                        aria-current="page">
                                    Início
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link bg-transparent border-0 text-dark mx-2 p-0 text-start" 
                                        onclick="navegar('projetos')">
                                    Projetos
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link bg-transparent border-0 text-dark mx-2 p-0 text-start" 
                                        onclick="navegar('cadastro')">
                                    Cadastro
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;
}

function renderFooter() {
    footer.innerHTML = `
        <footer class="bg-neutral-dark py-4 mt-auto border-0 shadow-none" role="contentinfo">
            <div class="container-fluid px-3 px-md-5">
                <section class="mb-3 text-center" aria-labelledby="contato-titulo">
                    <h2 id="contato-titulo" class="h5">Contato</h2>
                    <address class="">
                        <p class="mb-1">Endereço: Rua da Esperança, 123 - Cidade Feliz</p>
                        <p class="mb-1">Telefone: (00) 1234-5678</p>
                        <p class="mb-0">Email: <a href="mailto:contato@minhaong.org" class="">contato@minhaong.org</a></p>
                    </address>
                </section>
            </div>
            <div class="container-fluid px-3 px-md-5">
                <p class="copyright mb-0 text-center">&copy; 2025 Associação Semente de Empoderamento. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;
}

// Função de navegação SPA
window.navegar = function(rota) {
    switch(rota) {
        case 'home':
            mainContent.innerHTML = homePage();
            break;
        case 'projetos':
            mainContent.innerHTML = projetosPage();
            break;
        case 'cadastro':
            mainContent.innerHTML = cadastroPage();
            initCadastroJS();
            break;
        default:
            mainContent.innerHTML = `<h2>Página não encontrada</h2>`;
    }
    window.scrollTo(0, 0);
    
    // Foca no conteúdo principal após navegação (melhora acessibilidade)
    mainContent.setAttribute('tabindex', '-1');
    mainContent.focus();
}

// Inicialização
renderHeader();
renderFooter();
navegar('home');
initThemeToggle(); // ← adicionado