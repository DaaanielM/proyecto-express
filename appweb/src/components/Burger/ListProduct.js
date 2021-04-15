import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styles from '../../assets/css/Cards.module.css';
import ListCategorias from '../Burger/ListCategorias';
import { getProductos } from '../services/index';

export default function ListProducts() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function loadProducts() {
			const datos = await getProductos();
			console.log(datos);
			if (datos.status === 200) {
				setProducts(datos.data.datos);
			}
		}
		loadProducts();
	}, []);

	return (
		<div className={styles.mainproducts}>
			<ListCategorias />
			<div className={styles.mainhg}>
				{products.map((item) => (
					<div className={styles.cardhg} key={item.id}>
						<img
							src={'http://localhost:4000/img/' + item.foto}
							alt=''
							className={styles.imghg}
						/>

						<h2 className={styles.nombrehg}>{item.nombre}</h2>
						<p className={styles.descripcionhg}>
							{item.descripcion}
						</p>
						<p className={styles.preciohg}>
							<span className={styles.dolar}>$</span>{' '}
							{item.precio}
						</p>
						<button type='submit' className={styles.agregarhg}>
							Agregar
						</button>
					</div>
				))}
			</div>
			<footer className={styles.footerdos}>
				Todos los derechos reservadados &copy; 2021
			</footer>
		</div>
	);
}

// return (
// 	<div>
// 		{products.map((item) => (
// 			<div key={item.id}>
// 				<h3>{item.nombre}</h3>
// 				<p>{item.precio}</p>
// 				<p>{item.descripcion}</p>
// 			</div>
// 		))}
// 	</div>
// );
