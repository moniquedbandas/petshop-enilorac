import dayjs from "dayjs";

import { hoursClick } from "./hours-click.js";
import { novoAgendamento } from "../../services/novo-agendamento.js";
import { schedulesDay } from "../agendamentos/load.js";

const form = document.querySelector("form");
const horaAgendada = document.getElementById("time");
const actualDate = document.getElementById("date");
const dateModal = document.getElementById("dateM");
//tive que criar dois IDs pras datas pq só estava pegando o primeiro - actualDate
const clientName = document.getElementById("client");
const petName = document.getElementById("pet");
const descricaoServico = document.getElementById("descricao");
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
    //recuperando o nome do tutor
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente");
    }
    //recuperando o nome do pet
    const namePet = petName.value.trim();
    if (!namePet) {
      return alert("Informe o nome do pet");
    }
    //recuperando o tipo de serviço no textarea
    const descricao = descricaoServico.value.trim();
    if (!descricao) {
      return alert("Descreva o serviço");
    }
    //recuperando a hora selecionada
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione a hora");
    }
    //recupera somente a hora usando o split
    const [hour] = hourSelected.innerText.split(":");
    //inserindo a hora na data!
    const when = dayjs(dateModal.value).add(hour, "hour");
    //gera um ID
    const id = new Date().getTime().toString();
    //faz o agendamento!
    await novoAgendamento({ id, name, when, namePet, descricao });
    // recarrega a lista
    await schedulesDay();
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
