import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getCategorias() {
	try {
		const respuesta = await axios({
			url: api + `categorias/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addCategoria(form) {
	try {
		const respuesta = await axios({
			url: api + `categorias/crear`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getCategoria(id) {
	try {
		const respuesta = await axios({
			url: api + `categorias/obtenerCategoria/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updateCategoria(form, id) {
	try {
		const respuesta = await axios({
			url: api + `categorias/actualizar/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteCategoria(id) {
	try {
		const respuesta = await axios({
			url: api + `categorias/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
