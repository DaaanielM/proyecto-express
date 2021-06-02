import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getOfertas() {
	try {
		const respuesta = await axios({
			url: api + `ofertas/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addOferta(form) {
	try {
		const respuesta = await axios({
			url: api + `ofertas/crear`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getOferta(id) {
	try {
		const respuesta = await axios({
			url: api + `ofertas/obtenerOferta/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updateOferta(form, id) {
	try {
		const respuesta = await axios({
			url: api + `ofertas/actualizar/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteOferta(id) {
	try {
		const respuesta = await axios({
			url: api + `ofertas/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
