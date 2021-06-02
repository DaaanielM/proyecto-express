import React, { useState, useEffect } from 'react';
import {
	addDireccion,
	getDireccion,
	updateDireccion,
} from '../../../services/direcciones/addressAdm';
function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		direccion: '',
		bario: '',
		adicionales: '',
		id_usuario: '',
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addDireccion(form);
		} else {
			await updateDireccion(form, id);
		}
		closeModal(true);
	};

	async function loadAddress() {
		const cls = await getDireccion(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
		console.log(cls);
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadAddress();
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
										required
										value={form.direccion}
										onChange={(event) => {
											changeForm(
												'direccion',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Dirección'
									/>
									<input
										type='text'
										className='form-control form-control-lg mt-3'
										required
										value={form.barrio}
										onChange={(event) => {
											changeForm(
												'barrio',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Barrio'
									/>
									<input
										type='text'
										className='form-control form-control-lg mt-3'
										required
										value={form.adicionales}
										onChange={(event) => {
											changeForm(
												'adicionales',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Adicionales'
									/>

									<input
										type='text'
										className='form-control form-control-lg mt-3'
										value={form.id_usuario}
										onChange={(event) => {
											changeForm(
												'id_usuario',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='ID Usuario'
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
