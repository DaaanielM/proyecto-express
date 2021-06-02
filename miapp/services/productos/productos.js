import axios from 'axios';

export const api = 'http://192.168.0.9:4000/';
export async function getProductos() {
	try {
		const respuesta = await axios({
			url: api + `productos/listar-app`,
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
			url: api + `productos/crear-app`,
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
			url: api + `productos/actualizar-app/` + id,
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
			url: api + `productos/eliminar-app/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
