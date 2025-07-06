// scripts.js

const toggleButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const contactForm = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      exibirMensagem("Por favor, preencha todos os campos.", "red");
      return;
    }

    if (!validateEmail(email)) {
      exibirMensagem("Digite um email válido.", "red");
      return;
    }

    exibirMensagem("Mensagem enviada com sucesso!", "green");
    contactForm.reset();
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function exibirMensagem(mensagem, cor) {
  statusMsg.style.color = cor;
  statusMsg.textContent = mensagem;

  setTimeout(() => {
    statusMsg.textContent = "";
  }, 4000);
}
