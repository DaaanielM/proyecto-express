import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AddButton from '../components/Button';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
import Home from '../screens/Home';
import Usuarios from '../components/Usuarios';
// import Roles from '../components/Roles';
// import Categorias from './Categorias';
import Productos from '../screens/Productos';
import Contacto from '../screens/Contacto';
import Perfil from '../screens/Perfil';
import Login from '../screens/Login';
import Pedidos from '../screens/Pedidos';
// import Nav from '../components/Burger/Nav';
import Registro from '../components/Burger/Registro/Registro';
import Admin from '../screens/Admin';
import CrudProducto from '../components/Admin/components/Productos/CrudProducto';
import CrudContactos from '../components/Admin/components/Contactos/CrudContactos';
import CrudDeseados from '../components/Admin/components/Deseados/CrudDeseados';
import CrudOfertas from '../components/Admin/components/Ofertas/CrudOfertas';
import CrudPedidos from '../components/Admin/components/Pedidos/CrudPedidos';
import CrudSuscripciones from '../components/Admin/components/Suscripciones/CrudSuscripciones';
import CrudUsuarios from '../components/Admin/components/Usuarios/CrudUsuarios';
import CrudCategorias from '../components/Admin/components/Categorias/CrudCategorias';
import CrudAdress from '../components/Admin/components/Direcciones/CrudAdress';
import CrudTipos from '../components/Admin/components/Tipos/CrudTipos';

export default function Container() {
	return (
		<Router>
			<>
				{/* <Nav /> */}
				<Switch>
					{/* Rutas admin */}
					<Route
						path={'/CrudProducto'}
						component={CrudProducto}></Route>
					<Route
						path={'/CrudContactos'}
						component={CrudContactos}></Route>
					<Route
						path={'/CrudDeseados'}
						component={CrudDeseados}></Route>
					<Route path={'/CrudAdress'} component={CrudAdress}></Route>
					<Route
						path={'/CrudOfertas'}
						component={CrudOfertas}></Route>
					<Route
						path={'/CrudPedidos'}
						component={CrudPedidos}></Route>
					<Route
						path={'/CrudSuscripciones'}
						component={CrudSuscripciones}></Route>
					<Route path={'/CrudTipos'} component={CrudTipos}></Route>
					<Route
						path={'/CrudUsuarios'}
						component={CrudUsuarios}></Route>
					<Route
						path={'/CrudCategorias'}
						component={CrudCategorias}></Route>
					{/* ---------------------------------- */}

					{/* Rutas usuarios */}

					<Route path={'/Home'} component={Home}></Route>
					<Route path={'/Usuarios'} component={Usuarios}></Route>
					<Route path={'/Contacto'} component={Contacto}></Route>
					<Route path={'/Perfil'} component={Perfil}></Route>
					<Route path={'/Productos'} component={Productos}></Route>
					<Route path={'/Pedidos'} component={Pedidos}></Route>
					<Route path={'/Registro'} component={Registro}></Route>
					<Route path={'/Login'} component={Login}></Route>
					<Route path={'/'} component={Admin}></Route>

					{/* <Route path={'/Categorias'} component={Categorias}></Route> */}
				</Switch>
			</>
		</Router>
	);
}
