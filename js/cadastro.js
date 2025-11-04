export function cadastroPage() {
    return `
        <div class="form-header">
            <h1 class="titulo-principal">Formulário de Cadastro</h1>
            <p class="form-intro">
                Bem-vindo! Ao preencher este formulário, você está dando o primeiro passo para se tornar parte de algo maior.
            </p>
            <img src="/imagens/banner-voluntarios.png" alt="Banner" class="form-banner">
        </div>

        <form id="form-cadastro" class="form-cadastro">
            <fieldset>
                <legend>Informações Pessoais</legend>
                <div class="form-group">
                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" >
                    <span class="error-message" id="error-nome"></span>
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" >
                    <span class="error-message" id="error-email"></span>
                </div>
                <div class="form-group">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" maxlength="14" >
                    <span class="error-message" id="error-cpf"></span>
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(00) 90000-0000" maxlength="15" >
                    <span class="error-message" id="error-telefone"></span>
                </div>
                <div class="form-group">
                    <label for="data_nascimento">Data de Nascimento:</label>
                    <input type="date" id="data_nascimento" name="data_nascimento" >
                    <span class="error-message" id="error-data"></span>
                </div>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>
                <div class="form-group">
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" placeholder="00000-000" maxlength="9" >
                    <span class="error-message" id="error-cep"></span>
                </div>
                <div class="form-group full-width-field">
                    <label for="endereco">Endereço Completo:</label>
                    <input type="text" id="endereco" name="endereco" >
                    <span class="error-message" id="error-endereco"></span>
                </div>
                <div class="form-group">
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" >
                    <span class="error-message" id="error-cidade"></span>
                </div>
                <div class="form-group">
                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado">
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
                    <span class="error-message" id="error-estado"></span>
                </div>
            </fieldset>

            <button type="submit" class="form-submit-button">Enviar Cadastro</button>
        </form>
    `;
}

function showToast(message, type = 'success', duration = 3000) {
    // Cria container se não existir
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Cria toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span style="color: #000;">${message}</span>`; // texto preto

    // Cria barra de progresso
    const progress = document.createElement('div');
    progress.className = 'toast-progress';
    progress.style.backgroundColor = type === 'error' ? '#e74c3c' : '#27ae60'; // vermelho ou verde
    progress.style.animationDuration = duration + 'ms';

    toast.appendChild(progress);
    container.appendChild(toast);

    // Mostra toast
    setTimeout(() => toast.classList.add('show'), 50);

    // Remove toast após duração
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 300); // espera animação de saída
    }, duration);
}

export function maskCPF() {
    const cpfInput = document.getElementById('cpf');
    if(!cpfInput) return;

    cpfInput.addEventListener('input', function(e) {
        let value = cpfInput.value.replace(/\D/g, ''); // remove tudo que não é número
        if(value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

        cpfInput.value = value;
    });
}

export function maskCEP() {
    const cepInput = document.getElementById('cep');
    if(!cepInput) return;

    cepInput.addEventListener('input', function() {
        let value = cepInput.value.replace(/\D/g, ''); // remove tudo que não é número
        if(value.length > 8) value = value.slice(0, 8); // limita a 8 dígitos

        value = value.replace(/(\d{5})(\d)/, '$1-$2'); // adiciona o hífen

        cepInput.value = value;
    });
}

export function maskTelefone() {
    const telefoneInput = document.getElementById('telefone');
    if (!telefoneInput) return;

    telefoneInput.addEventListener('input', function() {
        let value = telefoneInput.value.replace(/\D/g, ''); // remove tudo que não é número
        if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

        value = value.replace(/^(\d{2})(\d)/, '($1) $2');         // coloca parênteses no DDD
        value = value.replace(/(\d{4,5})(\d{4})$/, '$1-$2');       // coloca hífen antes dos últimos 4 dígitos

        telefoneInput.value = value;
    });
}

// Função para ativar validação e salvar no localStorage
export function initCadastroJS() {
    const form = document.getElementById('form-cadastro');

    if(!form) return; // Garante que só tenta adicionar evento se o formulário existir

    maskCPF();
    maskCEP();
    maskTelefone();

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita envio e recarregamento da página

        // Limpar mensagens de erro
        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

        // Captura valores
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

        // Validações
        if(nome.length < 3) {
            document.getElementById('error-nome').textContent = 'Nome deve ter pelo menos 3 caracteres.';
            valido = false;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('error-email').textContent = 'Email inválido.';
            valido = false;
        }
        if(!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
            document.getElementById('error-cpf').textContent = 'CPF inválido.';
            valido = false;
        }
        if(!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
            document.getElementById('error-telefone').textContent = 'Telefone inválido.';
            valido = false;
        }
        if(!data_nascimento) {
            document.getElementById('error-data').textContent = 'Data de nascimento é obrigatória.';
            valido = false;
        }
        if(!/^\d{5}-\d{3}$/.test(cep)) {
            document.getElementById('error-cep').textContent = 'CEP inválido.';
            valido = false;
        }
        if(endereco.length < 5) {
            document.getElementById('error-endereco').textContent = 'Endereço muito curto.';
            valido = false;
        }
        if(cidade.length < 2) {
            document.getElementById('error-cidade').textContent = 'Cidade inválida.';
            valido = false;
        }
        if(!estado) {
            document.getElementById('error-estado').textContent = 'Selecione um estado.';
            valido = false;
        }

        if(!valido) {
            showToast('Existem erros no formulário. Verifique os campos destacados.', 'error');
            return;
        }

        // Cria objeto usuário
        const usuario = { nome, email, cpf, telefone, data_nascimento, cep, endereco, cidade, estado };

        // Pega lista do localStorage e adiciona novo usuário
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Mensagem de sucesso
        const sucessoMsg = document.createElement('p');
        sucessoMsg.textContent = 'Cadastro realizado com sucesso!';
        sucessoMsg.className = 'mensagem-sucesso';
        form.prepend(sucessoMsg);

        // Se tudo estiver correto
        showToast('Cadastro realizado com sucesso!', 'sucesso');
        form.reset();
    });
}

