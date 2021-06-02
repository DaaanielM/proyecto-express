import React, { useState } from 'react';
import styles from '../assets/css/Home.module.css';
import { sendEmail } from './services/ofertas/suscripcionesview';
function Suscripciones() {
	const [suscribe, setSuscribe] = useState({
		correo: '',
	});
	const changeForm = (field, value) => {
		setSuscribe({ ...suscribe, [field]: value });
	};
	const submit = async (event) => {
		event.preventDefault();
		await sendEmail(suscribe);
	};
	return (
		<form className='suscribe' onSubmit={submit}>
			<h3 className={styles.ofertas}>¡Recibe nuestras ofertas!</h3>
			<input
				type='email'
				placeholder='Ingrese su correo electronico'
				className={styles.suscripciones}
				value={suscribe.correo}
				required
				onChange={(event) => changeForm('correo', event.target.value)}
			/>
			<button className={styles.enviar}>Envíar</button>
		</form>
	);
}

export default Suscripciones;
