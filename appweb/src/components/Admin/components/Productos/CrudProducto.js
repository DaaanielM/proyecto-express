import React, { useEffect, useState } from 'react';
import Cruds from '../../Cruds';
import { Modal } from 'react-bulma-components';
import {
	getProductos,
	deleteProducto,
} from '../../../services/productos/productoAdm';
import FormModal from './FormModal';

function CrudProducto() {
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
		const cls = await getProductos();
		console.log(cls);
		if (cls.status === 200) {
			setListar(cls.data.datos);
		}
	}
	const updateProducto = (id) => {
		setId(id);
		OpenModal();
	};

	const eliminar = async (id) => {
		await deleteProducto(id);
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
						<span className='h3'>Listado de productos</span>

						<table className='table table-striped mt-5'>
							<thead>
								<tr>
									<th>Foto</th>
									<th>Nombre</th>
									<th>Descripción</th>
									<th>Precio</th>
									<th>Categoria</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{listar.map((item) => (
									<tr key={item.id}>
										<td>{item.foto}</td>
										<td>{item.nombre}</td>
										<td>{item.descripcion}</td>
										<td>{item.precio}</td>
										<td>{item.categoria}</td>

										<td>
											<i
												className='fas fa-edit mx-2 text-info'
												onClick={() =>
													updateProducto(item.id)
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

export default CrudProducto;
