import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getUsuarios() {
	try {
		const respuesta = await axios({
			url: api + `usuarios/listar`,
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
			url: api + `usuarios/crear`,
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
			url: api + `usuarios/actualizar/` + id,
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
			url: api + `usuarios/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
