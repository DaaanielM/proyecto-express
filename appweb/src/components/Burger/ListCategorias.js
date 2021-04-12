import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/index';
import FooterComponent from '../../components/Burger/FooterComponent';
import '../../assets/css/Footer.css';
import Button from '../../components/Button';

const ListCategorias = () => {
	const [categorias, setCategorias] = useState([]);
	useEffect(() => {
		async function loadCategorias() {
			const datos = await getCategorias();
			console.log(datos);
			if (datos.status === 200) {
				setCategorias(datos.data.datos);
			}
		}
		loadCategorias();
	}, []);
	return (
		<>
			<div className='container'>
				<br />
				<br />
				<table className='table container is-6 is-bordered is-striped is-hoverable'>
					<thead className='has-background-info'>
						<tr className='hola'>
							<th
								scope='col'
								className='has-text-white has-text-centered'>
								ID
							</th>

							<th
								scope='col'
								className='has-text-white has-text-centered'>
								Categoría
							</th>
							<th
								scope='col'
								className='has-text-white has-text-centered'>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						{categorias.map((item) => (
							<tr>
								<td>{item.id}</td>
								<td>{item.nombre}</td>
								<td>
									<Button />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<FooterComponent />
		</>
	);
};

export default ListCategorias;
