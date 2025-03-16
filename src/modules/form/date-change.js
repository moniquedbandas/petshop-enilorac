import { schedulesDay } from "../agendamentos/load.js";
// Selecionando os elementos de data
const selectedDateM = document.getElementById("dateM");
const actualDate = document.getElementById("date");

// Recarrega a lista de horários quando o input de data do modal mudar
selectedDateM.onchange = () => {
  // Sincroniza o valor do actualDate
  actualDate.value = selectedDateM.value;
  schedulesDay(); // Atualiza a lista de agendamentos
};

// Recarrega a lista de horários quando o input de data principal mudar
actualDate.onchange = () => {
  // Sincroniza o valor do dateModal
  selectedDateM.value = actualDate.value;
  schedulesDay(); // Atualiza a lista de agendamentos
};
