import React, { useState } from 'react';
import Burger from '../../../assets/img/burger.jpg';
import styles from '../../../assets/css/Login.module.css';
import { isValidEmail } from '../../../helpers/validations';

import { Link, useHistory } from 'react-router-dom';
import { getRegistro } from '../../services/registro/registroview';

const Registro = () => {
	const history = useHistory();

	const [registro, setRegistro] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		contrasena: '',
	});

	const [error, setError] = useState('');

	// Esta función es para capturar los datos de registro
	const onChange = (e) => {
		setRegistro({
			...registro,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		// TODA LA VALIDAERGFRGE

		const { nombre, correo, telefono, contrasena } = registro;

		if (nombre === '') {
			setError('Complete el nombre perro hp');
			return;
		}
		if (correo === '') {
			setError('Complete el correo perro hp');
			return;
		}
		if (!isValidEmail(correo)) {
			setError('El correo no es valido perro hp');
			return;
		}
		if (telefono === '') {
			setError('Complete el correo perro hp');
			return;
		}
		if (contrasena === '') {
			setError('Complete el correo perro hp');
			return;
		}

		history.push('/Login');

		e.preventDefault();
		await getRegistro(registro);
	};

	return (
		<div className='container' id={styles.container}>
			<div className='field column is-5 is-offset-4'>
				<div>
					<h3 className='title has-text-centered center'>
						Registrate
					</h3>
				</div>
				<div className='box'>
					<div className='field'>
						<img src={Burger} alt='' className='img-hg' />
					</div>
					<div className='title has-text-grey has-text-centered is-5'>
						Por favor ingresa tu correo y contraseña
					</div>
					<form>
						<div className='field'>
							<div className='control'>
								<input
									className='input is-large'
									type='text'
									name='nombre'
									placeholder='Nombre'
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='field'>
							<div className='control'>
								<input
									className='input is-large'
									type='email'
									name='correo'
									placeholder='Correo'
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='field'>
							<div className='control'>
								<input
									className='input is-large'
									type='number'
									name='telefono'
									placeholder='Teléfono'
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='field'>
							<div className='control'>
								<input
									className='input is-large'
									type='password'
									name='contrasena'
									placeholder='Password'
									onChange={onChange}
								/>
							</div>
						</div>
						{error ? (
							<div className='notification is-danger'>
								<p>{error}</p>
							</div>
						) : null}
					</form>
					<div>
						<br></br>
						<button
							onClick={onSubmit}
							type='submit'
							className='button is-block is-warning is-large is-fullwidth'
							style={{
								color: '#FFFFFF',
								backgroundColor: '#CECECE',
								fontWeight: 'bold',
							}}>
							Registrarme
						</button>
						<Link to={'/Login'}>
							<button
								className='button is-block is-warning is-large is-fullwidth'
								style={{
									color: '#FFFFFF',
									fontWeight: 'bold',
									backgroundColor: '#29CD24',
									marginTop: 10,
								}}>
								Iniciar Sesión
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registro;
