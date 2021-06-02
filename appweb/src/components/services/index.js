import axios from 'axios';

// const baseUrl_productos = process.env.REACT_APP_BASE_URL_PRODUCTOS;

export async function getProductos() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/productos/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getCategorias() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/categorias/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getPerfil() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/usuarios/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getOfertas() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/ofertas/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
export async function getPedidos() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/pedidos/listar/2`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getContactos() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/contactos`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getDirecciones() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/direcciones/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getTipos() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/tipos/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
export async function getSuscripciones() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/suscripciones/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
