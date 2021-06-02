import React, { useState, useEffect } from 'react';
import {
	addContacto,
	getContacto,
	updateContacto,
} from '../../../services/contactos/contactoAdm';
function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		correo: '',
		mensaje: '',
		id_tipo_contacto: 0,
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addContacto(form);
		} else {
			await updateContacto(form, id);
		}
		closeModal(true);
	};

	async function loadContacto() {
		const cls = await getContacto(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
		console.log(cls);
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadContacto();
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
										type='email'
										className='form-control form-control-lg mt-3'
										required
										onChange={(event) => {
											changeForm(
												'correo',
												event.target.value // le pasamos el valor
											);
										}}
										value={form.correo}
										placeholder='Correo'
									/>
									<input
										type='text'
										className='form-control form-control-lg mt-3'
										value={form.mensaje}
										required
										onChange={(event) => {
											changeForm(
												'mensaje',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Mensaje'
									/>
									<input
										type='text'
										className='form-control form-control-lg mt-3'
										value={form.id_tipo_contacto}
										required
										onChange={(event) => {
											changeForm(
												'id_tipo_contacto',
												event.target.value
											);
										}}
										placeholder='id_tipo_contacto'
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
