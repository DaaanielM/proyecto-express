import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getDirecciones() {
	try {
		const respuesta = await axios({
			url: api + `direcciones/listar`,
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
			url: api + `direcciones/crear`,
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
			url: api + `direcciones/actualizar/` + id,
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
			url: api + `direcciones/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
