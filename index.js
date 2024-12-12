// Função para validar o formato do email
function validateEmail(email) {
    // Verifica se o email corresponde ao padrão especificado
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        // Cria um novo erro com a mensagem 'Email inválido'
        const err = new Error('Email inválido.');
        // Adiciona uma propriedade 'input' ao erro para identificar o campo com problema
        err.input = 'email';
        // Lança o erro para ser capturado posteriormente
        throw err;
    }
}

// Função para validar a senha
function validatePassword(password) {
    // Verifica se a senha atende aos critérios de segurança
    if (
        password.length < 8 ||  // Comprimento mínimo de 8 caracteres
        !password.match(/[a-z]/) ||  // Pelo menos uma letra minúscula
        !password.match(/[A-Z]/) ||  // Pelo menos uma letra maiúscula
        !password.match(/[0-9]/) ||  // Pelo menos um número
        !password.match(/[^a-zA-Z0-9\s]/)  // Pelo menos um caractere especial
    ) {
        // Cria um novo erro com a mensagem 'Senha inválida'
        const err = new Error('Senha inválida.');
        // Adiciona uma propriedade 'input' ao erro para identificar o campo com problema
        err.input = 'password';
        // Lança o erro para ser capturado posteriormente
        throw err;
    }
}

// Função para resetar os estilos dos campos de entrada
function resetFormStyles() {
    // Itera sobre os campos de entrada do usuário
    Object.entries(userInputs).forEach(([key, value]) => {
        // Remove as classes 'success' e 'error' dos campos
        value.classList.remove('success', 'error');
        // Limpa as mensagens de erro exibidas
        document.querySelector(`#${key}-error`).textContent = '';
    });
}

// Objeto para armazenar as referências dos campos de entrada do formulário
const userInputs = {};

// Seleciona os campos de entrada do formulário pelo ID e armazena no objeto
userInputs.name = document.querySelector('#name');
userInputs.email = document.querySelector('#email');
userInputs.password = document.querySelector('#password');

// Seleciona o formulário
const form = document.querySelector('form');

// Adiciona um ouvinte de evento para o formulário, que será ativado no envio
form.addEventListener('submit', (ev) => {
    // Previne o comportamento padrão do envio do formulário
    ev.preventDefault();
    // Reseta os estilos dos campos do formulário
    resetFormStyles();
    try {
        // Adiciona a classe 'success' ao campo de nome
        userInputs.name.classList.add('success');
        // Valida o email e, se válido, adiciona a classe 'success'
        validateEmail(userInputs.email.value);
        userInputs.email.classList.add('success');
        // Valida a senha e, se válida, adiciona a classe 'success'
        validatePassword(userInputs.password.value);
        userInputs.password.classList.add('success');
    } catch (err) {
        // Adiciona a classe 'error' ao campo com problema
        userInputs[err.input].classList.add('error');
        // Exibe a mensagem de erro correspondente
        document.querySelector(`#${err.input}-error`).textContent = err.message;
    }
});
