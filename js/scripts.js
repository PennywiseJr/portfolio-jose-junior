// scripts.js

// Seleciona o botão de toggle do menu (hambúrguer) e o menu de navegação
const toggleButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Adiciona um evento de clique no botão para abrir/fechar o menu de navegação
toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Alterna a classe 'active' para mostrar/esconder o menu
});

// Seleciona o formulário de contato e o elemento onde será exibida a mensagem de status
const contactForm = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

// Verifica se o formulário existe na página para evitar erros em outras páginas
if (contactForm) {
  // Adiciona um evento de envio para o formulário
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário para validar os dados antes

    // Obtém e limpa os valores dos campos do formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação simples: Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
      exibirMensagem("Por favor, preencha todos os campos.", "red");
      return; // Sai da função se a validação falhar
    }

    // Validação de formato do e-mail usando expressão regular
    if (!validateEmail(email)) {
      exibirMensagem("Digite um email válido.", "red");
      return; // Sai da função se o e-mail for inválido
    }

    // Se passar nas validações, exibe mensagem de sucesso e reseta o formulário
    exibirMensagem("Mensagem enviada com sucesso!", "green");
    contactForm.reset();
  });
}

// Função para validar o formato do e-mail usando regex
function validateEmail(email) {
  // Regex para validar e-mails simples
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para exibir mensagens de status ao usuário
function exibirMensagem(mensagem, cor) {
  statusMsg.style.color = cor; // Define a cor da mensagem (ex: vermelho para erro, verde para sucesso)
  statusMsg.textContent = mensagem; // Exibe o texto da mensagem

  // Limpa a mensagem após 4 segundos para não ficar permanentemente na tela
  setTimeout(() => {
    statusMsg.textContent = "";
  }, 4000);
}

// Efeito extra: Aplica destaque suave (fade) nos links do menu ao passar o mouse
const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach((link) => {
  // Ao entrar o mouse sobre um link, reduz a opacidade dos outros links para dar destaque
  link.addEventListener("mouseenter", () => {
    menuLinks.forEach((l) => {
      if (l !== link) l.style.opacity = "0.5";
    });
  });

  // Ao tirar o mouse, restaura a opacidade original dos links
  link.addEventListener("mouseleave", () => {
    menuLinks.forEach((l) => (l.style.opacity = "1"));
  });
});
