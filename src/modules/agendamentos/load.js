import { agendamentoFetchByDay } from "../../services/agendamento-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { mostrarAgendamentos } from "../agendamentos/show.js";
const selectedDate = document.getElementById("date");
const selectedDateM = document.getElementById("dateM");
export async function schedulesDay() {
  //obtem a data do input
  const date = selectedDate.value;
  selectedDateM.value = date;
  //busca na api os agendamentos
  const agendamentoDiario = await agendamentoFetchByDay({ date });

  //exibe os agendamentos
  mostrarAgendamentos({ agendamentoDiario });
  //renderiza as horas disponíveis
  hoursLoad({ date, agendamentoDiario });
}
