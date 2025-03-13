import dayjs from "dayjs";
import { hoursClick } from "./hours-click.js";
import { novoAgendamento } from "../../services/novo-agendamento.js";

const form = document.querySelector("form");
const horaAgendada = document.getElementById("time");
const actualDate = document.getElementById("date");
const dateModal = document.getElementById("dateM");
//tive que criar dois IDs pras datas pq só estava pegando o primeiro - actualDate
const clientName = document.getElementById("client");
const petName = document.getElementById("pet");
//data atual pro input
const todayDate = dayjs(new Date()).format("YYYY-MM-DD");
const horaAtual = dayjs(new Date()).format("HH:mm");

//carregar data atual
horaAgendada.value = horaAtual;
actualDate.value = todayDate;
dateModal.value = todayDate;

//definindo data minima como data atual
dateModal.min = todayDate;
actualDate.min = todayDate;
hoursClick();
form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente");
    }
    const namePet = petName.value.trim();
    if (!namePet) {
      return alert("Informe o nome do pet");
    }
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione a hora");
    }
    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(dateModal.value).add(hour, "hour");

    const id = new Date().getTime().toString();

    await novoAgendamento({ id, name, when, namePet });
    console.log(novoAgendamento);
  } catch (error) {
    alert("nao foi possivel agendar");
    console.log(error);
  }
};
