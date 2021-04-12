import React from 'react';

const Usuarios = () => {
	return (
		<div className='container'>
			<h2 className='title has-text-centered'> Formulario </h2>

			<div className='field'>
				<label className='label'>Nombre</label>
				<div className='control'>
					<input
						className='input'
						type='text'
						placeholder='Text input'
					/>
				</div>
			</div>
			<div className='field'>
				<label className='label'>Usuario</label>
				<div className='control has-icons-left has-icons-right'>
					<input
						className='input is-success'
						type='text'
						placeholder='Text input'
						defaultValue='bulma'
					/>
					<span className='icon is-small is-left'>
						<i className='fas fa-user' />
					</span>
					<span className='icon is-small is-right'>
						<i className='fas fa-check' />
					</span>
				</div>
				<p className='help is-success'>
					Este nombre de usuario está disponible
				</p>
			</div>
			<div className='field'>
				<label className='label'>Email</label>
				<div className='control has-icons-left has-icons-right'>
					<input
						className='input is-danger'
						type='email'
						placeholder='Email input'
						defaultValue='hello@'
					/>
					<span className='icon is-small is-left'>
						<i className='fas fa-envelope' />
					</span>
					<span className='icon is-small is-right'>
						<i className='fas fa-exclamation-triangle' />
					</span>
				</div>
				<p className='help is-danger'>Este email es invalido</p>
			</div>
			<div className='field'>
				<label className='label'>País</label>
				<div className='control'>
					<div className='select'>
						<select>
							<option>Seleccione uno</option>
							<option>Polombia</option>
						</select>
					</div>
				</div>
			</div>
			<div className='field'>
				<label className='label'>Mensaje</label>
				<div className='control'>
					<textarea
						className='textarea'
						placeholder='Textarea'
						defaultValue={''}
					/>
				</div>
			</div>
			<div className='field'>
				<div className='control'>
					<label className='checkbox'>
						<input type='checkbox' />
						Estoy de acuerdo{' '}
					</label>
				</div>
			</div>
			<div className='field'>
				<div className='control'>
					<label className='radio'>
						<input type='radio' name='question' />
						Si
					</label>
					<label className='radio'>
						<input type='radio' name='question' />
						No
					</label>
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
	);
};

export default Usuarios;
