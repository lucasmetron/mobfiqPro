import axios from "axios";
import config from "../config";

// Caso tenha alguma configuração de Headers e etc, coloque aqui
// export const headers = {
// 	language: 'pt'
// };

// Requisições do sistema são feitas por essas constante
export const api = axios.create({
  baseURL: `${config.BASE_URL}`,
  // headers: headers
});
