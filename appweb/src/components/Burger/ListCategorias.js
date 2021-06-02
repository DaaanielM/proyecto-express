import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/index';
import FooterComponent from '../../components/Burger/FooterComponent';
import '../../assets/css/Footer.css';
import styles from '../../assets/css/Categorias.module.css';
import Nav from './Nav';

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
			<Nav />
			<div className={styles.catpadre}>
				{categorias.map((item) => (
					<h2 className={styles.categorias}>{item.nombre}</h2>
				))}
			</div>
			<FooterComponent />
		</>
	);
};

export default ListCategorias;
