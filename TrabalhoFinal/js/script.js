// 🌗 Alternância de tema escuro/claro
const temaBtn = document.getElementById("tema-btn");
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Atualiza ícone (🌙 ou ☀️)
  temaBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ✅ Validação do formulário e feedback de sucesso
const form = document.getElementById("cadastro-form");
const mensagem = document.getElementById("mensagem-sucesso");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const servidor = document.getElementById("servidor").value;

  if (!nome || !email || !servidor) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Simula envio
  form.reset();
  mensagem.classList.remove("hidden");

  // Oculta a mensagem após alguns segundos
  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 5000);
});

// 🎯 Animação ao rolar (usando IntersectionObserver)
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animado");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Seletores
const mobileToggle = document.getElementById('mobile-nav-toggle');
const navWrapper = document.querySelector('.nav-links-wrapper');
const body = document.body;

mobileToggle.addEventListener('click', () => {
  navWrapper.classList.toggle('open');
  body.classList.toggle('menu-open');
});
