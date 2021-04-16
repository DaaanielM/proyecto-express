import axios from 'axios';

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
