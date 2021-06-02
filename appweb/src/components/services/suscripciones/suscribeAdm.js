import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getSuscripciones() {
	try {
		const respuesta = await axios({
			url: api + `suscripciones/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addSuscripcion(form) {
	try {
		const respuesta = await axios({
			url: api + `suscripciones/crear`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getSuscripcion(id) {
	try {
		const respuesta = await axios({
			url: api + `suscripciones/obtenerSuscripciones/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updateSuscripcion(form, id) {
	try {
		const respuesta = await axios({
			url: api + `suscripciones/actualizar/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteSuscripcion(id) {
	try {
		const respuesta = await axios({
			url: api + `suscripciones/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
