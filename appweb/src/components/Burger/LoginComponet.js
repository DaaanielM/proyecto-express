import React from 'react';
import Burger from '../../assets/img/loginburger.jpg';
const LoginComponet = () => {
	return (
		<div className='container'>
			<div className='field column is-5 is-offset-4'>
				<div>
					<h3 className='title has-text-link has-text-centered center'>
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
						<label className='checkbox' style={{ margin: '20px' }}>
							<input type='checkbox' />
							Recordarme
						</label>
						<button className='button is-block is-link is-large is-fullwidth'>
							Iniciar Sesión
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginComponet;
