# Validador de Email e Senha

Validador de Email e Senha é uma aplicação web que valida os emails e senhas de usuários conforme critérios específicos.

<!-- - **Veja Online:** [Link para a aplicação](#)

![Projeto](./path/to/image1.png)
![Projeto](./path/to/image2.png) -->

## Funcionalidades

- **Validação de email:** Verifica se o formato do email está correto, seguindo as regras padrão.
- **Validação de senha:** Confirma se a senha atende aos requisitos de complexidade, como comprimento mínimo, presença de letras maiúsculas, minúsculas, números e caracteres especiais.
- **Mensagens de erro:** Exibe mensagens claras e concisas para o usuário em caso de falha na validação.
- **Tratamento de erros:** Utiliza `try...catch` para capturar e exibir erros de forma amigável.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Executar o Projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/validador-email-senha.git
    cd validador-email-senha
    ```

1. **Abra o arquivo `index.html` em seu navegador.**

## Estrutura do Projeto

- `index.html`: Página principal com o formulário de registro.
- `style.css`: Estilos CSS para a página.
- `script.js`: Lógica JavaScript para a validação.

## Validações

- **Email:**
  - Deve conter o caractere `@`.
  - A parte antes do `@` deve ter pelo menos 2 caracteres.
  - A parte após o `@` deve ter pelo menos 2 caracteres.
  - Deve haver um ponto (`.`) seguido de pelo menos 2 caracteres após o `@`.
- **Senha:**
  - Mínimo de 8 caracteres.
  - Pelo menos uma letra minúscula.
  - Pelo menos uma letra maiúscula.
  - Pelo menos um número.
  - Pelo menos um caractere especial.

## Exemplo de Código (script.js)

```javascript
function validarEmail(email) {
  // Implementação da lógica de validação de email
}

function validarSenha(senha) {
  // Implementação da lógica de validação de senha
}

function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    validarEmail(email);
    validarSenha(senha);
    // Se as validações passarem, você pode enviar o formulário ou realizar outras ações
  } catch (error) {
    alert(error.message);
  }
}
```

## Melhorias

- **Expressões regulares:** Utilizar expressões regulares para validar o formato do email de forma mais eficiente.
- **Feedback visual:** Destacar os campos inválidos com uma cor diferente ou exibir um ícone de erro.
- **Mensagens de erro personalizadas:** Fornecer mensagens de erro mais específicas para cada tipo de erro.
- **Testes unitários:** Criar testes unitários para garantir a qualidade do código.

## Aprendizados

Desenvolver o Validador de Email e Senha proporcionou diversos aprendizados, incluindo:

- **Validação de Dados:** Entendimento aprofundado das técnicas de validação de dados, garantindo que informações críticas sejam corretas antes de serem processadas.
- **Uso de `try...catch`:** Implementação de mecanismos eficazes para captura e tratamento de erros, melhorando a robustez da aplicação.
- **Melhoria Contínua:** Identificação de áreas para melhorias contínuas, como o uso de expressões regulares para validação e a importância do feedback visual para a experiência do usuário.
- **Segurança:** Reflexão sobre práticas de segurança, como a importância de criptografar senhas e utilizar bibliotecas confiáveis para validações.
- **Experiência do Usuário:** Valor da clareza e concisão nas mensagens de erro exibidas aos usuários, facilitando a correção de entradas inválidas.

## Observações

- **Adapte o código:** Este é apenas um exemplo básico. Você pode personalizar a interface, as mensagens de erro e adicionar mais funcionalidades conforme necessário.
- **Segurança:** Para aplicações reais, considere utilizar bibliotecas de validação de formulários e criptografar as senhas antes de armazená-las.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

**M Daniel Dantas**

- **GitHub:** [mdanieldantas](https://github.com/mdanieldantas)
- **LinkedIn:** [mdanieldantas](https://www.linkedin.com/in/mdanieldantas)
- **Portfólio:** [Portfólio de Daniel Dantas](https://danieldantasdev.vercel.app)
- **Email:** [contatomarcosdgomes@gmail.com](mailto:contatomarcosdgomes@gmail.com)
- **Currículo:** [Baixar Currículo](https://docs.google.com/document/d/1_FpPYPXiifH1B3BDWnJuNk05DQfddCOBqFxyT6Citg4/edit?usp=sharing)
