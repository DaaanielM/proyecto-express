import React, { useState, useEffect } from 'react';
import {
	addPedido,
	getPedido,
	updatePedido,
} from '../../../services/pedidos/pedidosAdm';
function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		nombre: '',
		telefono: '',
		direccion: '',
		barrio: '',
		id: '',
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addPedido(form);
		} else {
			await updatePedido(form, id);
		}
		closeModal(true);
	};

	async function loadPedido() {
		const cls = await getPedido(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
		console.log(cls);
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadPedido();
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
										value={form.nombre}
										onChange={(event) => {
											changeForm(
												'nombre',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Nombre'
									/>
									<input
										type='text'
										className='form-control form-control-lg mt-3'
										required
										value={form.telefono}
										onChange={(event) => {
											changeForm(
												'telefono',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Teléfono'
									/>
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
										value={form.id}
										onChange={(event) => {
											changeForm(
												'id',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='ID Productos'
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
