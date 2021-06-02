import React, { useState, useEffect } from 'react';
import {
	addUsuario,
	getUsuario,
	updateUsuario,
} from '../../../services/usuarios/usuarioAdm';
function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		contrasena: '',
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addUsuario(form);
		} else {
			await updateUsuario(form, id);
		}
		closeModal(true);
	};

	async function loadUsuario() {
		const cls = await getUsuario(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadUsuario();
		}
	}, []);

	return (
		<div className='container pt-4'>
			<div className='row'>
				<div className='colg-lg-6'>
					<div className='card text-center'>
						<div className='card-body'>
							<h3>
								{id == 0 ? 'Agregar' : 'Actualizar'} - {id}
							</h3>

							<span className='badge badge-danger text-danger'>
								TODOS LOS CAMPOS SON OBLIGATORIOS
							</span>
							<form className='mt-4' onSubmit={submit}>
								<div className='row'>
									<input
										type='text'
										className='form-control form-control-lg mt-3'
										value={form.nombre}
										required
										onChange={(event) => {
											changeForm(
												'nombre',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Nombre'
									/>
									<input
										type='email'
										className='form-control form-control-lg mt-3'
										value={form.correo}
										required
										onChange={(event) => {
											changeForm(
												'correo',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Email'
									/>
									<input
										type='number'
										className='form-control form-control-lg mt-3'
										value={form.telefono}
										required
										onChange={(event) => {
											changeForm(
												'telefono',
												event.target.value
											);
										}}
										placeholder='Teléfono'
									/>
									<input
										type='text'
										className='form-control form-control-lg mt-3'
										value={form.contrasena}
										required
										placeholder='Contraseña'
										onChange={(event) => {
											changeForm(
												'contrasena',
												event.target.value
											);
										}}
									/>
								</div>

								<div className='mt-3'>
									<button
										type='text'
										className='btn btn-danger btn-lg mt-2 mx-3'
										onClick={() => closeModal()}>
										Cancelar
									</button>
									<button
										type='text'
										className='btn btn-primary btn-lg mt-2'>
										{id == 0 ? 'Agregar' : 'Actualizar'}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FormModal;
