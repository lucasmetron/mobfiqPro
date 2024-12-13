const dev = {
  //essa verificação tem que ser feita pq nos testes por algum motivo a função returnStoreName, não existe.
  // BASE_URL: "https://api-homolog-aramisv2.mobfiq.com.br/",
  // BASE_URL: "https://api-aramisv2.mobfiq.com.br/",
  // BASE_URL: "https://api-aguadecocov2.mobfiq.com.br/",
  BASE_URL: "https://api-homolog-aguadecocov2.mobfiq.com.br/",
  // BASE_URL: "https://api-bawclothingv2.mobfiq.com.br/",
  // BASE_URL: "https://api-mrcatv2.mobfiq.com.br/",
  // BASE_URL: "https://api-intimissimiv2.mobfiq.com.br/",
};

const config = dev;

export default {
  // Adicionar valores comuns aqui
  ...config,
};
