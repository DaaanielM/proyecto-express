import axios from 'axios';
export const api = 'http://192.168.0.9:4000/';

export async function addUser(form) {
	try {
		const respuesta = await axios({
			url: api + `usuarios/crear-app`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}
