import axios from 'axios';
export const api = `http://localhost:4000/`;
export async function sendEmail(form) {
	try {
		const respuesta = await axios({
			url: api + `suscripciones/crear`,
			method: 'post',
			data: form,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
