import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getContactos() {
	try {
		const respuesta = await axios({
			url: api + `contactos/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addContacto(form) {
	try {
		const respuesta = await axios({
			url: api + `contactos/crear`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getContacto(id) {
	try {
		const respuesta = await axios({
			url: api + `contactos/obtenerContacto/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updateContacto(form, id) {
	try {
		const respuesta = await axios({
			url: api + `contactos/actualizar/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteContacto(id) {
	try {
		const respuesta = await axios({
			url: api + `contactos/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
