import { schedulesDay } from "../agendamentos/load.js";

const selectedDateM = document.getElementById("dateM");

selectedDateM.onchange = () => {
  schedulesDay();
};
