import { homePage } from './home.js';
import { projetosPage } from './projetos.js';
import { cadastroPage } from './cadastro.js';
import { initCadastroJS } from './cadastro.js';

const mainContent = document.getElementById('main-content');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

function renderHeader() {
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-custom shadow-none border-0">
        <div class="container-fluid px-3 px-md-5">
            <div class="row w-100 align-items-center g-0">
                <!-- Coluna esquerda: título da ONG -->
                <div class="col-6">
                    <a class="navbar-brand text-dark fw-bold fs-5 me-0"
                       href="#" 
                       onclick="navegar('home')"
                       style="white-space: normal; line-height: 1.3; word-wrap: break-word;">
                        Associação Semente de Empoderamento
                    </a>
                </div>
                
                <!-- Coluna direita: hambúrguer e menu -->
                <div class="col-6 d-flex justify-content-end">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" aria-controls="navbarNav" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link mx-2" href="#" onclick="navegar('home')">Início</a></li>
                            <li class="nav-item"><a class="nav-link mx-2" href="#" onclick="navegar('projetos')">Projetos</a></li>
                            <li class="nav-item"><a class="nav-link mx-2" href="#" onclick="navegar('cadastro')">Cadastro</a></li>
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
        <footer class="bg-neutral-dark text-white py-4 mt-auto border-0 shadow-none">
            <div class="container-fluid px-3 px-md-5">
                <section class="mb-3 text-center">
                    <h2 class="h5">Contato</h2>
                    <address class="text-white">
                        <p class="mb-1">Endereço: Rua da Esperança, 123 - Cidade Feliz</p>
                        <p class="mb-1">Telefone: (00) 1234-5678</p>
                        <p class="mb-0">Email: contato@minhaong.org</p>
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
            initCadastroJS(); // Inicializa validação **após inserir o HTML**
            break;
        default:
            mainContent.innerHTML = `<h2>Página não encontrada</h2>`;
    }
    window.scrollTo(0, 0);
}

// Inicialização
renderHeader();
renderFooter();
navegar('home'); // Página inicial
