import React, { useEffect, useState } from 'react';
import { getOfertas } from '../services/index';
import styles from '../../assets/css/Ofertas.module.css';
const Ofertas = () => {
	const [ofertas, setOfertas] = useState([]);
	useEffect(() => {
		async function loadOfertas() {
			const datos = await getOfertas();
			console.log(datos);
			if (datos.status === 200) {
				setOfertas(datos.data.datos);
			}
		}
		loadOfertas();
	}, []);
	return (
		<div>
			{ofertas.map((item) => (
				<div className={styles.ofertas} key={item.id}>
					<h2 className={styles.nombre}>{item.nombre}</h2>
					<img
						src={'http://localhost:4000/img/' + item.imagen}
						alt=''
						className={styles.imagen}
					/>
				</div>
			))}
		</div>
	);
};

export default Ofertas;
