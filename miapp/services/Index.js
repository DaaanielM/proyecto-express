import axios from 'axios';
export const api = 'http://192.168.0.9:4000/';
// http://localhost:4000/productos/crear
export async function getProductos() {
	try {
		const respuesta = await axios({
			url: api + `productos/listar-app`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addEmpleado(user) {
	try {
		const respuesta = await axios({
			url: api + `usuarios/crear`,
			method: 'post',
			data: user,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
