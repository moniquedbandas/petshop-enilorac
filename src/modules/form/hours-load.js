import dayjs from "dayjs";
import { availableHours } from "../../utils/available-hours";
import { hoursClick } from "./hours-click.js";
const hours = document.getElementById("time");

export function hoursLoad({ date }) {
  hours.innerHTML = "";
  // Adicionar a opção "Escolha um horário"
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = "Escolha um horário";
  hours.append(defaultOption);
  const available = availableHours.map((hour) => {
    //recuperar somente hr
    const [horaAgenda] = hour.split(":");

    const isHourPast = dayjs(date).add(horaAgenda, "hour").isAfter(dayjs());
    // console.log(horaAgenda, isHourPast);
    return {
      hour,
      disponivel: isHourPast,
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
  hoursClick();
}
