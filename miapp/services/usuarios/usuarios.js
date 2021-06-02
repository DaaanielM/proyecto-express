import axios from 'axios';

export const api = 'http://192.168.0.9:4000/';
export async function getUsuarios() {
	try {
		const respuesta = await axios({
			url: api + `usuarios/listar-app`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addUsuario(form) {
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
export async function getUsuario(id) {
	try {
		const respuesta = await axios({
			url: api + `usuarios/obtenerUsuario/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
export async function updateUsuario(form, id) {
	try {
		const respuesta = await axios({
			url: api + `usuarios/actualizar-app/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteUsuario(id) {
	try {
		const respuesta = await axios({
			url: api + `usuarios/eliminar-app/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
