import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function agendamentoFetchByDay({ date }) {
  try {
    //fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    //converte para json
    const data = await response.json();
    //filtra os agendamentos pelo dia selecionado
    const agendamentoDiario = data.filter((agendamento) =>
      dayjs(date).isSame(agendamento.when, "day")
    );
    return agendamentoDiario;
  } catch (error) {
    console.log(error);
    alert(
      "Não foi possível buscar os agendamentos do dia selecionado. ORIGEM: agendamento-fetch-by-day"
    );
  }
}
