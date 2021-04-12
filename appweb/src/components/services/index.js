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
