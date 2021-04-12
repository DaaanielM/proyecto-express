import React from 'react';
import styles from '../../assets/css/Contacto.module.css';
import FooterComponent from '../../components/Burger/FooterComponent';
import '../../assets/css/Footer.css';
const ContactComponent = () => {
	return (
		<div className={styles.contacto}>
			<div className='container' id='contact'>
				<h2 className='title has-text-centered' id={styles.titulo}>
					Envianos un mensaje
				</h2>

				<div className='field'>
					<label className='label' id={styles.ff}>
						Nombre
					</label>
					<div className='control'>
						<input
							className='input is-warning'
							type='text'
							placeholder='Ingrese su nombre'
						/>
					</div>
				</div>

				<div className='field'>
					<label className='label' id={styles.email}>
						Email
					</label>
					<div className='control'>
						<input
							className='input is-warning'
							type='email'
							placeholder='Ingrese su email'
						/>
					</div>
				</div>

				<div className='field'>
					<label className='label' id={styles.mensaje}>
						Mensaje
					</label>
					<div className='control'>
						<textarea
							className='textarea is-warning'
							placeholder='Escribenos un mensaje...'
						/>
					</div>
				</div>

				<div className='field is-grouped'>
					<div className='control'>
						<button className='button is-link'>Enviar</button>
					</div>
					<div className='control'>
						<button className='button is-link is-danger'>
							Cancelar
						</button>
					</div>
				</div>
			</div>
			<FooterComponent />
		</div>
	);
};

export default ContactComponent;
