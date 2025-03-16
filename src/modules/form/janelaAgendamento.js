const showAgendamento = document.getElementById("novoAgendamento");
const janAgendamento = document.getElementById("dialogAgendamento");
const form = janAgendamento.querySelector("form");

showAgendamento.addEventListener("click", () => {
  janAgendamento.showModal();
});

// Fecha o modal e redireciona para a página inicial após "AGENDAR"
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Aqui você pode realizar outras ações, como salvar os dados ou enviar para a API

  janAgendamento.close();
  window.location.href = "index.html";
});
