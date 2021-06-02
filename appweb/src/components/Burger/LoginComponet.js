import React from 'react';
import Burger from '../../assets/img/loginburger.jpg';
import styles from '../../assets/css/Login.module.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const LoginComponet = () => {
	return (
		<>
			<Nav />
			<div className='container' id={styles.container}>
				<div className='field column is-5 is-offset-4'>
					<div>
						<h3 className='title has-text-black has-text-centered center'>
							Inicia Sesión
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
										type='email'
										placeholder='Email'
										autofocus
									/>
								</div>
							</div>
							<div className='field'>
								<div className='control'>
									<input
										className='input is-large'
										type='password'
										placeholder='Password'
									/>
								</div>
							</div>
						</form>
						<div>
							<label
								className='checkbox'
								style={{ margin: '20px' }}>
								<input type='checkbox' />
								Recordarme
							</label>
							<Link to={'/Adminxd'}>
								<button
									className='button is-block is-warning is-large is-fullwidth'
									style={{
										color: '#FFFFFF',
										backgroundColor: '#E5DA37',
										fontWeight: 'bold',
									}}>
									Iniciar Sesión
								</button>
							</Link>
							<Link to={'/Registro'}>
								<button
									className='button is-block is-warning is-large is-fullwidth'
									style={{
										color: '#FFFFFF',
										backgroundColor: '#CECECE',
										fontWeight: 'bold',
										marginTop: 10,
									}}>
									Registrarme
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginComponet;
