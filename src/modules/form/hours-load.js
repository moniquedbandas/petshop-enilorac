import dayjs from "dayjs";
import { availableHours } from "../../utils/available-hours";
import { hoursClick } from "./hours-click.js";
const hours = document.getElementById("time");

export function hoursLoad({ date, agendamentoDiario }) {
  hours.innerHTML = "";
  // Adicionar a opção "Escolha um horário"
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = "Escolha um horário";
  hours.append(defaultOption);
  //obtem a lista de horarios ocupados
  const horaIndisponivel = agendamentoDiario.map((agendamento) =>
    dayjs(agendamento.when).format("HH:mm")
  );

  const available = availableHours.map((hour) => {
    //recuperar somente hr
    const [horaAgenda] = hour.split(":");

    const isHourPast = dayjs(date).add(horaAgenda, "hour").isBefore(dayjs());

    const disponivel = !horaIndisponivel.includes(hour) && !isHourPast;
    return {
      hour,
      disponivel,
    };
  });

  available.forEach(({ hour, disponivel }) => {
    const option = document.createElement("option");
    option.classList.add("time");
    option.classList.add(disponivel ? "available-hour" : "unavailable-hour");

    //se nao estiver disponivel, o option do select ficara desabilitado
    if (!disponivel) {
      option.disabled = true;
    }
    option.textContent = hour;
    hours.append(option);
  });
  //adicionando evento de clique nos horarios disponiveis
  hoursClick();
}
