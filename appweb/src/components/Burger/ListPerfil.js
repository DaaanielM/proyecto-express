import React, { useEffect, useState } from 'react';
import { getPerfil } from '../services/index';
import Imagen from '../../assets/img/usuario.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import styles from '../../assets/css/Perfil.module.css';
const ListPerfil = () => {
	const [perfil, setPerfil] = useState([]);
	useEffect(() => {
		async function loadPerfil() {
			const datos = await getPerfil();
			console.log(datos);
			if (datos.status === 200) {
				setPerfil(datos.data.datos[0]);
			}
		}
		loadPerfil();
	}, []);
	return (
		<div className={styles.perfil}>
			<section className={styles.seccionperfilusuario}>
				<div className={styles.perfilusuarioheader}>
					<div className={styles.perfilusuarioportada}>
						<div className={styles.perfilusuarioavatar}>
							<img src={Imagen} alt='imgavatar' />
						</div>
					</div>
				</div>

				<div className={styles.perfilusuariobody} key={perfil.id}>
					<div className={styles.perfilusuariobio}>
						<h3 className={styles.titulo}>{perfil.nombre}</h3>
					</div>

					<div className={styles.perfilusuariofooter}>
						<ul className={styles.listadatos}>
							<li>
								<FontAwesomeIcon
									className={styles.iconoxd}
									icon={faMobile}
								/>
								Telefono: {perfil.telefono}
							</li>
						</ul>
						<ul className={styles.listadatos}>
							<li>
								<FontAwesomeIcon
									className={styles.iconoxd}
									icon={faMailBulk}
								/>
								Correo: {perfil.correo}
							</li>
						</ul>
					</div>
				</div>
			</section>
			<footer className={styles.footertres}>
				Todos los derechos reservadados &copy; 2021
			</footer>
		</div>
	);
};

export default ListPerfil;
