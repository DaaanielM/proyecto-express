import React from 'react';
import styles from '../assets/css/Home.module.css';
function Suscripciones() {
	return (
		<div className='suscribe'>
			<h3 className={styles.ofertas}>¡Recibe nuestras ofertas!</h3>
			<input
				type='email'
				placeholder='Ingrese su correo electronico'
				className={styles.suscripciones}></input>
			<button className={styles.enviar}>Envíar</button>
		</div>
	);
}

export default Suscripciones;
