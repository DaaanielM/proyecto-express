import React from 'react';
import contact from '../../assets/img/contactenos.jpg';
function Contactenos() {
	return (
		<>
			<div className='container column is-5'>
				<h2 className='title is-4'>Contacténos</h2>
				<div className='field'>
					<img src={contact} alt='' />
				</div>
				<div className='field'>
					<label className='label'>
						Tu Nombre <span className='has-text-danger'>*</span>
					</label>
					<div className='control'>
						<input className='input' type='text' />
					</div>
				</div>
				<div className='field'>
					<label className='label'>
						Tu Email <span className='has-text-danger'>*</span>
					</label>
					<div className='control'>
						<input className='input' type='text' />
					</div>
					<div className='field'>
						<label className='label'>
							Tu Teléfono{' '}
							<span className='has-text-danger'>*</span>
						</label>
						<div className='control'>
							<input className='input' type='text' />
						</div>
					</div>
					<div className='field'>
						<label className='label'>
							Tu Mensaje{' '}
							<span className='has-text-danger'>*</span>
						</label>
						<div className='control'>
							<textarea className='textarea' defaultValue={''} />
						</div>
					</div>
					<div className='field is-grouped'>
						<div className='control'>
							<button className='button is-link'>Enviar</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contactenos;
