import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AddButton from '../components/Button';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
import Home from './Home';
import Usuarios from '../components/Usuarios';
// import Roles from '../components/Roles';
// import Categorias from './Categorias';
import Productos from './Productos';
import Contacto from './Contacto';
import Perfil from './Perfil';
import Login from './Login';
import Nav from '../components/Burger/Nav';

export default function Container() {
	return (
		<Router>
			<>
				<Nav />
				<Switch>
					<Route path={'/Home'} component={Home}></Route>
					<Route path={'/Usuarios'} component={Usuarios}></Route>
					<Route path={'/Contacto'} component={Contacto}></Route>
					<Route path={'/Perfil'} component={Perfil}></Route>
					<Route path={'/Productos'} component={Productos}></Route>
					<Route path={'/Login'} component={Login}></Route>
					{/* <Route path={'/Categorias'} component={Categorias}></Route> */}
				</Switch>
			</>
		</Router>
	);
}
