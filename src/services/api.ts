import axios from "axios";

// Caso tenha alguma configuração de Headers e etc, coloque aqui
// export const headers = {
// 	language: 'pt'
// };

// Requisições do sistema são feitas por essas constante
export const api = axios.create({
  baseURL: "https://sistema.idevangelho.com/",
  // headers: headers
});
