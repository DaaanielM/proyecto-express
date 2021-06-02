import axios from 'axios';

export const api = 'http://192.168.0.9:4000/';
export async function getPerfil() {
	try {
		const respuesta = await axios({
			url: api + `usuarios/listar-app`,
			method: 'get',
		});
		return respuesta;
		console.log(respuesta);
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
