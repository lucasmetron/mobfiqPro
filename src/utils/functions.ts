export function deleteTypeNavigatorFromString(value: string) {
  let newValue = value;
  if (value.includes("tab-")) {
    newValue = value.split("tab-")[1];
  }

  if (value.includes("stacksHome-")) {
    newValue = value.split("stacksHome-")[1];
  }

  if (value.includes("stacksContent-")) {
    newValue = value.split("stacksContent-")[1];
  }

  if (value.includes("stacksCollege-")) {
    newValue = value.split("stacksCollege-")[1];
  }

  if (value.includes("stacksMore-")) {
    newValue = value.split("stacksMore-")[1];
  }
  return newValue;
}

//recebe data assim 2022-10-10 e retorna assim Qua, 10 Out
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };

  return date.toLocaleDateString("pt-BR", options);
}

//recebe data assim 2022-10-10 e retorna assim "04 de setembro"
export function formatDateToDayAndMonth(data: string): string {
  try {
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    const [ano, mes, dia] = data.split("-");

    const mesPorExtenso = meses[parseInt(mes) - 1]; // Subtraindo 1 para ajustar ao índice do array

    return `${dia} de ${mesPorExtenso}`;
  } catch {
    return "";
  }
}
