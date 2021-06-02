import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getTipos() {
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

export async function addTipo(form) {
	try {
		const respuesta = await axios({
			url: api + `tipos/crear`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getTipo(id) {
	try {
		const respuesta = await axios({
			url: api + `tipos/obtenerTipo/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updateTipo(form, id) {
	try {
		const respuesta = await axios({
			url: api + `tipos/actualizar/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteTipo(id) {
	try {
		const respuesta = await axios({
			url: api + `tipos/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
