import React, { useEffect, useState } from 'react';
import Cruds from '../../Cruds';
import { Modal } from 'react-bulma-components';
import { getPedidos, deletePedido } from '../../../services/pedidos/pedidosAdm';

import FormModal from './FormModal';

function CrudPedidos() {
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
		const cls = await getPedidos();
		console.log(cls);
		if (cls.status === 200) {
			setListar(cls.data.datos);
		}
	}
	const updatePedido = (id) => {
		setId(id);
		OpenModal();
	};

	const eliminar = async (id) => {
		await deletePedido(id);
		await loadListarxd();
	};

	useEffect(() => {
		debugger;

		loadListarxd();
	}, []);

	return (
		<>
			<Cruds />
			<div className='container mt-4'>
				<div className='card'>
					<div className='card-body'>
						<span className='h3'>Listado de pedidos</span>

						<table className='table table-striped mt-5'>
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Teléfono</th>
									<th>Dirección</th>
									<th>Barrio</th>
									<th>ID Productos</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{listar.map((item) => (
									<tr key={item.id}>
										<td>{item.nombre}</td>
										<td>{item.telefono}</td>
										<td>{item.direccion}</td>
										<td>{item.barrio}</td>
										<td>{item.id}</td>

										<td>
											<i
												className='fas fa-edit mx-2 text-info'
												onClick={() =>
													updatePedido(item.id)
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

export default CrudPedidos;
