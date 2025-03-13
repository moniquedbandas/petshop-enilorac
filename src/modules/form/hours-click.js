export function hoursClick() {
  const selectElement = document.getElementById("time");

  selectElement.addEventListener("change", (event) => {
    //selecttedOptions retorna a coleção das opções selecionadas, 0 zero é para acessar a primeira e unica opção selecionada, ja que meu select so permite uma opção
    const selectedOption = event.target.selectedOptions[0];

    // Remover a classe hour-selected de todas as opções
    document.querySelectorAll(".time").forEach((option) => {
      option.classList.remove("hour-selected");
    });

    // Adicionar a classe na opção selecionada
    selectedOption.classList.add("hour-selected");
  });
}
