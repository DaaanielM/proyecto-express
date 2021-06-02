import React, { useState, useEffect } from 'react';
import { addDeseado, getDeseado } from '../../../services/deseados/deseadosAdm';
function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		id_usuario: 0,
		id_producto: 0,
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addDeseado(form);
		}
		closeModal(true);
	};

	async function loadAddress() {
		const cls = await getDeseado(id);
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
										type='number'
										className='form-control form-control-lg mt-3'
										required
										value={form.id_usuario}
										onChange={(event) => {
											changeForm(
												'id_usuario',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='ID Usuario'
									/>
									<input
										type='number'
										className='form-control form-control-lg mt-3'
										required
										value={form.id_producto}
										onChange={(event) => {
											changeForm(
												'id_producto',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='ID Producto'
									/>
								</div>

								<div className='mt-3'>
									<button
										type='text'
										className='btn btn-danger btn-lg mt-2 mx-3'
										onClick={() => closeModal()}>
										Cancelar
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
