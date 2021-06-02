import axios from 'axios';

export const api = 'http://192.168.0.9:4000/';

export async function getPedidos() {
	try {
		const respuesta = await axios({
			url: api + `pedidos/listar-app`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addPedido(form) {
	try {
		const respuesta = await axios({
			url: api + `pedidos/crear-app`,
			method: 'post',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}
export async function getPedido(id) {
	try {
		const respuesta = await axios({
			url: api + `pedidos/obtenerPedido/` + id,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
export async function updatePedido(form, id) {
	try {
		const respuesta = await axios({
			url: api + `pedidos/actualizar-app/` + id,
			method: 'put',
			data: form,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deletePedido(id) {
	try {
		const respuesta = await axios({
			url: api + `pedidos/eliminar-app/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
