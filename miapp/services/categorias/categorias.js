import axios from 'axios';

export const api = 'http://192.168.0.9:4000/';

// view
export async function getCategoria() {
	try {
		const respuesta = await axios({
			url: api + `categorias/listar-app`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

// admin'

export async function getCategorys() {
	try {
		const respuesta = await axios({
			url: api + `categorias/listar-app`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addCategory(form) {
	try {
		const respuesta = await axios({
			url: api + `categorias/crear-app`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}
export async function getCategory(id) {
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
export async function updateCategory(form, id) {
	try {
		const respuesta = await axios({
			url: api + `categorias/actualizar-app/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteCategory(id) {
	try {
		const respuesta = await axios({
			url: api + `categorias/eliminar-app/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
