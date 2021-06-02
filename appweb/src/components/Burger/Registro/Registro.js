import React, { useState } from 'react';
import Burger from '../../../assets/img/burger.jpg';
import styles from '../../../assets/css/Login.module.css';

import { Link } from 'react-router-dom';
import { getRegistro } from '../../services/registro/registroview';
function Registro() {
	const [registro, setRegistro] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		contrasena: '',
	});
	const changeForm = (field, value) => {
		setRegistro({ ...registro, [field]: value });
	};
	const submit = async (event) => {
		event.preventDefault();
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
									placeholder='Nombre'
									value={registro.nombre}
									onChange={(event) => {
										changeForm(
											'nombre',
											event.target.value
										);
									}}
								/>
							</div>
						</div>
						<div className='field'>
							<div className='control'>
								<input
									className='input is-large'
									type='email'
									placeholder='Correo'
									value={registro.correo}
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
							<div className='control'>
								<input
									className='input is-large'
									type='number'
									placeholder='Teléfono'
									value={registro.telefono}
									onChange={(event) => {
										changeForm(
											'telefono',
											event.target.value
										);
									}}
								/>
							</div>
						</div>
						<div className='field'>
							<div className='control'>
								<input
									className='input is-large'
									type='password'
									placeholder='Password'
									value={registro.contrasena}
									onChange={(event) => {
										changeForm(
											'contrasena',
											event.target.value
										);
									}}
								/>
							</div>
						</div>
					</form>
					<div>
						<br></br>
						<button
							onClick={submit}
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
}

export default Registro;
