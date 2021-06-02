import axios from 'axios';
export const api = `http://localhost:4000/`;

export async function getRegistro(registro) {
	try {
		const respuesta = await axios({
			url: api + `usuarios/crear`,
			method: 'post',
			data: registro,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
