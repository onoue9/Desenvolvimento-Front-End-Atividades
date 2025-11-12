export function cadastroPage() {
    return `
    <div class="container py-5">
        <div class="row g-5">
            <!-- Coluna esquerda: título, intro e banner -->
            <div class="col-lg-5">
                <h1 class="titulo-principal">Formulário de Cadastro</h1>
                <p class="form-intro">
                    Bem-vindo! Ao preencher este formulário, você está dando o primeiro passo para se tornar parte de algo maior.
                </p>
                <img src="/imagens/banner-voluntarios.png" alt="Grupo diverso de voluntários sorrindo e trabalhando juntos em uma comunidade" class="banner-cadastro mt-4">
            </div>

            <!-- Coluna direita: formulário -->
            <div class="col-lg-7">
                <form id="form-cadastro" class="form-cadastro" novalidate>
                    <fieldset>
                        <legend>Informações Pessoais</legend>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="nome" class="form-label">Nome Completo:</label>
                                <input type="text" id="nome" name="nome" class="form-control" aria-describedby="error-nome">
                                <span class="error-message" id="error-nome" role="alert" aria-live="polite"></span>
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">E-mail:</label>
                                <input type="email" id="email" name="email" class="form-control" aria-describedby="error-email">
                                <span class="error-message" id="error-email" role="alert" aria-live="polite"></span>
                            </div>
                            <div class="col-md-6">
                                <label for="cpf" class="form-label">CPF:</label>
                                <input type="text" id="cpf" name="cpf" class="form-control" placeholder="000.000.000-00" maxlength="14" aria-describedby="error-cpf">
                                <span class="error-message" id="error-cpf" role="alert" aria-live="polite"></span>
                            </div>
                            <div class="col-md-6">
                                <label for="telefone" class="form-label">Telefone:</label>
                                <input type="tel" id="telefone" name="telefone" class="form-control" placeholder="(00) 90000-0000" maxlength="15" aria-describedby="error-telefone">
                                <span class="error-message" id="error-telefone" role="alert" aria-live="polite"></span>
                            </div>
                            <div class="col-12">
                                <label for="data_nascimento" class="form-label">Data de Nascimento:</label>
                                <input type="date" id="data_nascimento" name="data_nascimento" class="form-control" aria-describedby="error-data">
                                <span class="error-message" id="error-data" role="alert" aria-live="polite"></span>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="mt-4">
                        <legend>Endereço</legend>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="cep" class="form-label">CEP:</label>
                                <input type="text" id="cep" name="cep" class="form-control" placeholder="00000-000" maxlength="9" aria-describedby="error-cep">
                                <span class="error-message" id="error-cep" role="alert" aria-live="polite"></span>
                            </div>
                            <div class="col-12">
                                <label for="endereco" class="form-label">Endereço Completo:</label>
                                <input type="text" id="endereco" name="endereco" class="form-control" aria-describedby="error-endereco">
                                <span class="error-message" id="error-endereco" role="alert" aria-live="polite"></span>
                            </div>
                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade:</label>
                                <input type="text" id="cidade" name="cidade" class="form-control" aria-describedby="error-cidade">
                                <span class="error-message" id="error-cidade" role="alert" aria-live="polite"></span>
                            </div>
                            <div class="col-md-6">
                                <label for="estado" class="form-label">Estado:</label>
                                <select id="estado" name="estado" class="form-select" aria-describedby="error-estado">
                                    <option value="" disabled selected>Selecione seu estado</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                                <span class="error-message" id="error-estado" role="alert" aria-live="polite"></span>
                            </div>
                        </div>
                    </fieldset>

                    <button type="submit" class="form-submit-button">Enviar Cadastro</button>
                </form>
            </div>
        </div>
    </div>
    `;
}

function showToast(message, type = 'success', duration = 3000) {
  // Anuncia no live region (para leitores de tela)
  const liveRegion = document.getElementById('aria-live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
  }

  // Cria container de toast se não existir
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  const toastClass = type === 'error' ? 'toast-error' : '';

  const toastEl = document.createElement('div');
  toastEl.className = `toast ${toastClass}`;
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');
  toastEl.setAttribute('aria-atomic', 'true');

  toastEl.innerHTML = `
    <div class="toast-body">
      ${message}
      <div class="toast-progress-bar mt-2"></div>
    </div>
  `;

  toastContainer.appendChild(toastEl);

  const bsToast = new bootstrap.Toast(toastEl, {
    autohide: true,
    delay: duration
  });

  bsToast.show();

  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
    if (toastContainer.children.length === 0) {
      toastContainer.remove();
    }
  });
}

// === Máscaras (mantidas inalteradas) ===
export function maskCPF() { /* ... */ }
export function maskCEP() { /* ... */ }
export function maskTelefone() { /* ... */ }

// Função para ativar validação e salvar no localStorage
export function initCadastroJS() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    maskCPF();
    maskCEP();
    maskTelefone();

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const data_nascimento = document.getElementById('data_nascimento').value;
        const cep = document.getElementById('cep').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const cidade = document.getElementById('cidade').value.trim();
        const estado = document.getElementById('estado').value;

        let valido = true;
        let primeiroErro = null;

        if (nome.length < 3) {
            document.getElementById('error-nome').textContent = 'Nome deve ter pelo menos 3 caracteres.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'nome';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('error-email').textContent = 'Email inválido.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'email';
        }
        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
            document.getElementById('error-cpf').textContent = 'CPF inválido.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'cpf';
        }
        if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
            document.getElementById('error-telefone').textContent = 'Telefone inválido.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'telefone';
        }
        if (!data_nascimento) {
            document.getElementById('error-data').textContent = 'Data de nascimento é obrigatória.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'data_nascimento';
        }
        if (!/^\d{5}-\d{3}$/.test(cep)) {
            document.getElementById('error-cep').textContent = 'CEP inválido.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'cep';
        }
        if (endereco.length < 5) {
            document.getElementById('error-endereco').textContent = 'Endereço muito curto.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'endereco';
        }
        if (cidade.length < 2) {
            document.getElementById('error-cidade').textContent = 'Cidade inválida.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'cidade';
        }
        if (!estado) {
            document.getElementById('error-estado').textContent = 'Selecione um estado.';
            valido = false;
            if (!primeiroErro) primeiroErro = 'estado';
        }

        if (!valido) {
            showToast('Existem erros no formulário. Verifique os campos destacados.', 'error');
            // Foca no primeiro campo com erro
            if (primeiroErro) {
                document.getElementById(primeiroErro).focus();
            }
            return;
        }

        const usuario = { nome, email, cpf, telefone, data_nascimento, cep, endereco, cidade, estado };
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        const sucessoMsg = document.createElement('p');
        sucessoMsg.textContent = 'Cadastro realizado com sucesso!';
        sucessoMsg.className = 'mensagem-sucesso';
        form.prepend(sucessoMsg);

        showToast('Cadastro realizado com sucesso!', 'success');
        form.reset();
    });
}