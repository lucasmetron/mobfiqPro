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

// caso não seja passado textApi é passado como default a api de homolog
export function returnStoreName(url: string) {
  //
  // primeiro verifico se está local host para retornar uma api fixa
  if (url.includes("localhost")) {
    // --------------------------- DAQUI PRA BAIXO SÓ API PROD ---------------------------
    // return 'https://api-mobfiqv2.mobfiq.com.br/';
    // return 'https://api-aguadecocov2.mobfiq.com.br/';
    // return 'https://api-aguadecocov2.mobfiq.com.br/';
    // return 'https://api-vivavinhov2.mobfiq.com.br/';
    // return 'https://api-lamesadetodosv2.mobfiq.com.br/';
    // return 'https://api-openbox2v2.mobfiq.com.br/';
    // return 'https://api-dentalmedsulv2.mobfiq.com.br/';
    // return 'https://api-babadotopv2.mobfiq.com.br/';
    // return 'https://api-topthermv2.mobfiq.com.br/';
    // return 'https://api-torratorrav2.mobfiq.com.br/';
    // return 'https://api-overboardv2.mobfiq.com.br/';
    // return "https://api-bawclothingv2.mobfiq.com.br/";
    // return 'https://api-amobelezav2.mobfiq.com.br/';
    // return 'https://api-soulierv2.mobfiq.com.br/';
    // return 'https://api-farmagorav2.mobfiq.com.br/';
    // return 'https://api-gangv2.mobfiq.com.br/';
    // return 'https://api-bioextratusv2.mobfiq.com.br/';
    // return 'https://api-aramisv2.mobfiq.com.br/';
    // return 'https://api-tacov2.mobfiq.com.br/';
    // return 'https://api-drogariacatarinensev2.mobfiq.com.br/';
    // return 'https://api-sorvov2.mobfiq.com.br/';
    // return 'https://api-torratorrav2.mobfiq.com.br/';
    // return 'https://api-komforthousev2.mobfiq.com.br/';
    // return 'https://api-niaziv2.mobfiq.com.br/';
    // return 'https://api-casamimosav2.mobfiq.com.br/';
    // return 'https://api-nkstorev2.mobfiq.com.br/';
    // return 'https://api-zinzanev2.mobfiq.com.br/';
    // return 'https://api-dresstoshopv2.mobfiq.com.br/';
    // return 'https://api-sonhodospesv2.mobfiq.com.br/';
    // return 'https://api-drogariavenanciov2.mobfiq.com.br/';
    // return 'https://api-intimissimiv2.mobfiq.com.br/';
    // return 'https://api-soulierv2.mobfiq.com.br/';
    // return 'https://api-damyllerv2.mobfiq.com.br/';
    // return 'https://api-cellarvinhosv2.mobfiq.com.br/';
    // return 'https://api-calzedoniav2.mobfiq.com.br/';
    // --------------------------- DAQUI PRA BAIXO SÓ API HOMOLOS ---------------------------
    // return 'https://api-homolog-damyllerv2.mobfiq.com.br/';
    // return 'https://api-homolog-calzedoniav2.mobfiq.com.br/';
    // return 'https://api-homolog-mobfiqv2.mobfiq.com.br/';
    // return 'https://api-homolog-amobelezav2.mobfiq.com.br/';
    // return 'https://api-homolog-overboardv2.mobfiq.com.br/';
    // return ' https://api-homolog-sestiniv2.mobfiq.com.br/';
    // return 'https://api-homolog-torratorrav2.mobfiq.com.br/';
    // return 'https://api-homolog-intimissimiv2.mobfiq.com.br/';
    // return 'https://api-homolog-aramisv2.mobfiq.com.br/';
    // return 'https://api-homolog-nkstorev2.mobfiq.com.br/';
    // return 'https://api-homolog-bioextratusv2.mobfiq.com.br/';
    // return 'https://api-homolog-bawclothingv2.mobfiq.com.br/';
    // return 'https://api-homolog-soulierv2.mobfiq.com.br/';
    // return 'https://api-homolog-komforthousev2.mobfiq.com.br/';
    // return 'https://api-homolog-lamesadetodosv2.mobfiq.com.br/';
    // return 'https://api-homolog-sorvov2.mobfiq.com.br/';
    // return 'https://api-homolog-cellarvinhosv2.mobfiq.com.br/';
    return "https://api-homolog-aguadecocov2.mobfiq.com.br/";
    // return 'https://api-homolog-sonhodospesv2.mobfiq.com.br/';
    // return 'https://api-homolog-komforthousev2.mobfiq.com.br/';
    // return 'https://api-homolog-drogariavenanciov2.mobfiq.com.br/';
    // return 'https://api-homolog-drogariacatarinensev2.mobfiq.com.br/';
    // return 'https://api-homolog-lojaspompeiav2.mobfiq.com.br/';
    // return 'https://api-homolog-tacov2.mobfiq.com.br/';
    // return 'https://api-homolog-torratorrav2.mobfiq.com.br/';
    // return 'https://api-homolog-vixbrasilv2.mobfiq.com.br/';
    // return 'https://api-homolog-babadotopv2.mobfiq.com.br/';
    // return 'https://api-homolog-dentalmedsulv2.mobfiq.com.br/';
    // return 'https://api-homolog-marimariav2.mobfiq.com.br/';
    // return 'https://api-homolog-australv2.mobfiq.com.br/';
    // return 'https://api-homolog-ciamaritimav2.mobfiq.com.br/';
    // return 'https://api-homolog-castronavesv2.mobfiq.com.br/';
    // return 'https://api-homolog-boutiquemorangorosav2.mobfiq.com.br/';
    // return 'https://api-homolog-douralv2.mobfiq.com.br/';
    // return 'https://api-homolog-pizzitav2.mobfiq.com.br/';
    // return 'https://api-homolog-openbox2v2.mobfiq.com.br/';
    // return 'https://api-homolog-soulierv2.mobfiq.com.br/';
    // return 'https://api-homolog-torratorrav2.mobfiq.com.br/';
    // return 'https://api-homolog-jogev2.mobfiq.com.br/';
  }

  // Caso esteja em homologação a api será essa
  if (url.includes("homolog")) {
    const preName = url.split("-")[1];
    const name = preName.split(".")[0];
    const finalUrl = `https://api-homolog-${name.replace(
      "v3",
      "v2"
    )}.mobfiq.com.br/`;
    return finalUrl;
  } else {
    // se estiver em prod sera a api abaixo
    const preNameStore = url.split("//");
    const nameStore = preNameStore[1].split("/");
    const preFinalUrl = `https://api-${nameStore[0]}/`;
    const finalUrl = preFinalUrl.replace("v3", "v2");
    return finalUrl;
  }
}
