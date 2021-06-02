import axios from 'axios';

export const api = 'http://192.168.0.9:4000/';
export async function getDirecciones() {
	try {
		const respuesta = await axios({
			url: api + `direcciones/listar-app`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addDireccion(form) {
	try {
		const respuesta = await axios({
			url: api + `direcciones/crear-app`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}
export async function getDireccion(id) {
	try {
		const respuesta = await axios({
			url: api + `direcciones/obtenerDirecciones/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
export async function updateDireccion(form, id) {
	try {
		const respuesta = await axios({
			url: api + `direcciones/actualizar-app/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteDireccion(id) {
	try {
		const respuesta = await axios({
			url: api + `direcciones/eliminar-app/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
