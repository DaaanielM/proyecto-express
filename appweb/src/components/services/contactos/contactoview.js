import axios from 'axios';
export const api = `http://localhost:4000/`;

export async function getTipo() {
	try {
		const respuesta = await axios({
			url: api + `tipos/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function sendContact(form) {
	try {
		const respuesta = await axios({
			url: api + `contactos/crear`,
			method: 'post',
			data: form,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
