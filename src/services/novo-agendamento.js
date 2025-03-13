import { apiConfig } from "./api-config.js";

export async function novoAgendamento({ id, name, when, namePet }) {
  try {
    const data = { id, name, when, namePet };
    console.log("Dados enviados:", JSON.stringify(data));
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Falha ao fazer agendamento");
    }

    alert("Agendamento feito com sucesso");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente mais tarde");
  }
}
