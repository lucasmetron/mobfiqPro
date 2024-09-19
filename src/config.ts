import { returnStoreName } from 'utils/utils';

const url = window.location.href;

const dev = {
	//essa verificação tem que ser feita pq nos testes por algum motivo a função returnStoreName, não existe.
	BASE_URL:
		returnStoreName !== undefined
			? returnStoreName(url)
			: 'https://api-homolog-mobfiqv2.mobfiq.com.br/'
};

const prod = {
	//essa verificação tem que ser feita pq nos testes por algum motivo a função returnStoreName, não existe.
	BASE_URL:
		returnStoreName !== undefined
			? returnStoreName(url)
			: 'https://api-mobfiqv2.mobfiq.com.br/'
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default {
	// Adicionar valores comuns aqui
	...config
};
