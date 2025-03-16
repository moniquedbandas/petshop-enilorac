import { schedulesDay } from "./load.js";
import { agendamentoCancelar } from "../../services/agendamento-cancel.js";

const periods = document.querySelectorAll(".periodo");

//gerando evento de clique para cada lista
periods.forEach((period) => {
  //capturando o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("removerBtn")) {
      //
      const item = event.target.closest("li");
      //pega o id do agendamento para remover
      const { id } = item.dataset;
      //confirma que o id foi selecionado
      if (id) {
        //confirma se o usuario quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );
        if (isConfirm) {
          //realiza o cancelamento
          await agendamentoCancelar({ id });
          //recarrega a lista dos agendamentos
          schedulesDay();
        }
      }
    }
  });
});
