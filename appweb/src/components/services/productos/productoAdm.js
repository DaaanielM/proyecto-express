import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getProductos() {
	try {
		const respuesta = await axios({
			url: api + `productos/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addProducto(form) {
	try {
		const respuesta = await axios({
			url: api + `productos/crear`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getProducto(id) {
	try {
		const respuesta = await axios({
			url: api + `productos/obtenerProducto/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updateProducto(form, id) {
	try {
		const respuesta = await axios({
			url: api + `productos/actualizar/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteProducto(id) {
	try {
		const respuesta = await axios({
			url: api + `productos/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
