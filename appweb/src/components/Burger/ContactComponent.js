import React, { useState, useEffect } from 'react';
import styles from '../../assets/css/Contacto.module.css';
import FooterComponent from '../../components/Burger/FooterComponent';
import '../../assets/css/Footer.css';
import Ofertas from '../../components/Burger/Ofertas';
import { sendContact, getTipo } from '../services/contactos/contactoview';
import Nav from './Nav';
// import Select from 'react-select';

const ContactComponent = () => {
	const [tipo, setTipo] = useState([]);
	const [form, setForm] = useState({
		correo: '',
		mensaje: '',
		id_tipo_contacto: '',
	});
	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};
	const submit = async (event) => {
		event.preventDefault();
		await sendContact(form);
	};
	useEffect(() => {
		async function loadTipo() {
			const datos = await getTipo();
			console.log(datos);
			if (datos.status === 200) {
				setTipo(datos.data.datos);
			}
		}
		loadTipo();
	}, []);
	return (
		<>
			<Nav />
			<div className={styles.contacto}>
				<Ofertas />

				<div className='container' id='contact'>
					<h2 className='title has-text-centered' id={styles.titulo}>
						Envianos un mensaje
					</h2>
					<form>
						<div className='field'>
							<label className='label' id={styles.email}>
								Asunto
							</label>

							<select
								value={form.id_tipo_contacto}
								className='input is-warning'
								onChange={(event) => {
									changeForm(
										'id_tipo_contacto',
										event.target.value
									);
								}}
								name={'id_tipo_contacto'}>
								<option>Asunto</option>
								{tipo.map((item) => (
									<option value={item.id}>
										{item.nombre}
									</option>
								))}
							</select>


							
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
									value={form.correo}
									required
									onChange={(event) => {
										changeForm(
											'correo',
											event.target.value
										);
									}}
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
									value={form.mensaje}
									required
									onChange={(event) => {
										changeForm(
											'mensaje',
											event.target.value
										);
									}}
								/>
							</div>
						</div>
					</form>

					<div className='field is-grouped'>
						<div className='control'>
							<button
								onClick={submit}
								type='submit'
								id={styles.button}
								style={{ marginTop: 20 }}
								className='button is-link'>
								Enviar
							</button>
						</div>
					</div>
				</div>
				<FooterComponent />
			</div>
		</>
	);
};

export default ContactComponent;
