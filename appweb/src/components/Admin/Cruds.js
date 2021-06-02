import React from 'react';
import { Link } from 'react-router-dom';
import burger from '../../assets/img/logo.png';

function Cruds() {
	return (
		<>
			<nav
				className='navbar'
				role='navigation'
				aria-label='main navigation'>
				<div className='navbar-brand'>
					<Link className='navbar-item' href='https://bulma.io'>
						<img src={burger} width='30' alt='Cargando... xd' />
					</Link>
					<Link
						role='button'
						className='navbar-burger'
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarBasicExample'>
						<span aria-hidden='true' />
						<span aria-hidden='true' />
						<span aria-hidden='true' />
					</Link>
				</div>
				<div id='navbarBasicExample' className='navbar-menu'>
					<div className='navbar-start'>
						<div className='navbar-item has-dropdown is-hoverable'>
							<Link className='navbar-link'>Crud</Link>
							<div className='navbar-dropdown'>
								<Link
									to={'/CrudProducto'}
									className='navbar-item'>
									Crud Productos
								</Link>
								<Link
									to={'/CrudContactos'}
									className='navbar-item'>
									Crud Contactos
								</Link>
								<Link
									to={'/CrudCategorias'}
									className='navbar-item'>
									Crud Categorias
								</Link>
								<Link
									to={'/CrudUsuarios'}
									className='navbar-item'>
									Crud Usuarios
								</Link>
								<Link
									to={'/CrudAdress'}
									className='navbar-item'>
									Crud Direcciones
								</Link>

								<Link
									to={'/CrudOfertas'}
									className='navbar-item'>
									Crud Ofertas
								</Link>
								<Link
									to={'/CrudSuscripciones'}
									className='navbar-item'>
									Crud Suscripciones
								</Link>
								<Link to={'/CrudTipos'} className='navbar-item'>
									Crud Tipos
								</Link>
								<Link
									to={'/CrudPedidos'}
									className='navbar-item'>
									Crud Pedidos
								</Link>
								<Link
									to={'/CrudDeseados'}
									className='navbar-item'>
									Crud Deseados
								</Link>
								<hr className='navbar-divider' />
								<Link className='navbar-item'>Graficos</Link>
							</div>
						</div>
					</div>
					<div className='navbar-end'>
						<div className='navbar-item'>
							<div className='buttons'>
								<Link
									to={'/Home'}
									className='button is-primary'>
									<strong>Salir</strong>
								</Link>
								{/* <Link className='button is-light'>Salir</Link> */}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Cruds;
