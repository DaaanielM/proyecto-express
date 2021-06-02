import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getPedidos() {
	try {
		const respuesta = await axios({
			url: api + `pedidos/listar`,
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
			url: api + `pedidos/crear`,
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
			url: api + `pedidos/actualizar/` + id,
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
			url: api + `pedidos/eliminar/` + id,
			method: 'delete',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
