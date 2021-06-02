import React, { useState, useEffect } from 'react';
import {
	addCategoria,
	getCategoria,
	updateCategoria,
} from '../../../services/categorias/categoriasAdm';
function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		nombre: '',
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addCategoria(form);
		} else {
			await updateCategoria(form, id);
		}
		closeModal(true);
	};

	async function loadCategoria() {
		const cls = await getCategoria(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
		console.log(cls);
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadCategoria();
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
										onChange={(event) => {
											changeForm(
												'nombre',
												event.target.value // le pasamos el valor
											);
										}}
										value={form.nombre}
										placeholder='Categoria'
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
