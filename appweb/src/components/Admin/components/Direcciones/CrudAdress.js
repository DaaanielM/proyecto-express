import React, { useEffect, useState } from 'react';
import Cruds from '../../Cruds';
import { Modal } from 'react-bulma-components';
import {
	getDirecciones,
	deleteDireccion,
} from '../../../services/direcciones/addressAdm';

import FormModal from './FormModal';

function CrudAdress() {
	const [listar, setListar] = useState([]);
	const [modal, setModal] = useState(false);
	const [id, setId] = useState(0); // Este id es para editar el elemento

	const OpenModal = () => {
		setModal(true);
	};

	const CloseModal = (result) => {
		if (result) {
			loadListarxd();
		}
		setModal(false);
		setId(0);
	};
	// Actualizar
	async function loadListarxd() {
		const cls = await getDirecciones();
		console.log(cls);
		if (cls.status === 200) {
			setListar(cls.data.datos);
		}
	}
	const updateCategoria = (id) => {
		setId(id);
		OpenModal();
	};

	const eliminar = async (id) => {
		await deleteDireccion(id);
		await loadListarxd();
	};

	useEffect(() => {
		loadListarxd();
	}, []);

	return (
		<>
			<Cruds />
			<div className='container mt-4'>
				<div className='card'>
					<div className='card-body'>
						<span className='h3'>Listado de direcciones</span>

						<table className='table table-striped mt-5'>
							<thead>
								<tr>
									<th>Dirección</th>
									<th>Barrio</th>
									<th>Adicionales</th>
									<th>ID Usuario</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{listar.map((item) => (
									<tr key={item.id}>
										<td>{item.direccion}</td>
										<td>{item.barrio}</td>
										<td>{item.adicionales}</td>
										<td>{item.id_usuario}</td>

										<td>
											<i
												className='fas fa-edit mx-2 text-info'
												onClick={() =>
													updateCategoria(item.id)
												}></i>
											<i
												className='fas fa-trash-alt mx-2 text-danger'
												onClick={() =>
													eliminar(item.id)
												}></i>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						{/* Aquí va el boton  */}
						<button
							onClick={OpenModal}
							className='btn btn-success btn-lg m-auto w-100'>
							Agregar
						</button>

						{/* Grafica*/}
					</div>
				</div>
				{/* Aquí va el modal */}
				<Modal show={modal} onClose={CloseModal}>
					<Modal.Content>
						<FormModal closeModal={CloseModal} id={id} />
					</Modal.Content>
				</Modal>
			</div>
		</>
	);
}

export default CrudAdress;
