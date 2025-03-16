import dayjs from "dayjs";

const periodManha = document.getElementById("periodo-manha");
const periodTarde = document.getElementById("periodo-tarde");
const periodNoite = document.getElementById("periodo-noite");

export function mostrarAgendamentos({ agendamentoDiario }) {
  try {
    //limpando as listas
    periodManha.innerHTML = "";
    periodTarde.innerHTML = "";
    periodNoite.innerHTML = "";
    //renderiza agendmento por periodo
    agendamentoDiario.forEach((agendamento) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const namePet = document.createElement("strong");
      const name = document.createElement("span");
      const descricao = document.createElement("span");
      const removerBtn = document.createElement("button");
      //adicionando id do agendmento
      item.setAttribute("data-id", agendamento.id);
      time.textContent = dayjs(agendamento.when).format("HH:mm");
      namePet.textContent = agendamento.namePet;
      name.textContent = agendamento.name;
      descricao.textContent = agendamento.descricao;
      removerBtn.textContent = "Remover agendamento";

      removerBtn.classList.add("removerBtn");
      //adiciona as informações no item
      item.append(time, namePet, name, descricao, removerBtn);

      //obtem somente a hora
      const hour = dayjs(agendamento.when).hour();
      //renderiza o agendamento na sessão de forma CONDICIONAL
      if (hour <= 12) {
        periodManha.appendChild(item);
      } else if (hour > 12 && hour < 18) {
        periodTarde.appendChild(item);
      } else {
        periodNoite.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel exibir os agendamentos.ORIGEM: show");
  }
}
