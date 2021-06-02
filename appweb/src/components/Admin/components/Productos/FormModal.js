import React, { useState, useEffect } from 'react';
import {
	addProducto,
	getProducto,
	updateProducto,
} from '../../../services/productos/productoAdm';
function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		foto: '',
		nombre: '',
		descripcion: '',
		precio: '',
		id_categoria: '',
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addProducto(form);
		} else {
			await updateProducto(form, id);
		}
		closeModal(true);
	};

	async function loadProducto() {
		const cls = await getProducto(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadProducto();
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
										value={form.foto}
										required
										onChange={(event) => {
											changeForm(
												'foto',
												event.target.value // le pasamos el valor
											);
										}}
										placeholder='Url foto'
									/>
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
										type='text'
										className='form-control form-control-lg mt-3'
										value={form.descripcion}
										required
										onChange={(event) => {
											changeForm(
												'descripcion',
												event.target.value
											);
										}}
										placeholder='Descripción'
									/>
									<input
										type='number'
										className='form-control form-control-lg mt-3'
										value={form.precio}
										required
										placeholder='Precio'
										onChange={(event) => {
											changeForm(
												'precio',
												event.target.value
											);
										}}
									/>
									<input
										type='number'
										className='form-control form-control-lg mt-3'
										value={form.id_categoria}
										required
										placeholder='Categoria'
										onChange={(event) => {
											changeForm(
												'id_categoria',
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
