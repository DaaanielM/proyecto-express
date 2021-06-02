import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getDeseados() {
	try {
		const respuesta = await axios({
			url: api + `deseados/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addDeseado(form) {
	try {
		const respuesta = await axios({
			url: api + `deseados/crear`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getDeseado(id) {
	try {
		const respuesta = await axios({
			url: api + `deseados/obtenerDeseado/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function deleteDeseado(id_user, id_product) {
	try {
		const respuesta = await axios({
			url: api + `deseados/eliminar/${id_user}/${id_product}`,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
