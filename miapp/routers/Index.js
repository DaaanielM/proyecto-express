import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Registro from '../screens/Registro';
import Menu from '../screens/Menu';
import Pedidos from '../screens/Pedidos';
import Perfil from '../screens/Perfil';
// import Crud from '../screens/Crud';
import CrudProduct from '../components/Admin/Productos/CrudProduct';
import CrudDirecciones from '../components/Admin/Direcciones/CrudDirecciones';
import CrudUsuarios from '../components/Admin/Usuarios/CrudUsuarios';
import CrudCategorias from '../components/Admin/Categorias/CrudCategorias';
import CrudPedidos from '../components/Admin/Pedidos/CrudPedidos';
import Prueba from '../components/Pruebas/Prueba';
// import LoginNavigator from './LoginNavigator';
// import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

export default function Index() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name='Login' component={Login} />
				<Drawer.Screen name='Registro' component={Registro} />
				<Drawer.Screen name='Home' component={Home} />
				<Drawer.Screen name='Menu' component={Menu} />
				<Drawer.Screen name='Pedidos' component={Pedidos} />
				<Drawer.Screen name='Perfil' component={Perfil} />
				{/* <Drawer.Screen name='Crud' component={Crud} /> */}
				<Drawer.Screen name='CrudProduct' component={CrudProduct} />
				<Drawer.Screen
					name='CrudDirecciones'
					component={CrudDirecciones}
				/>
				<Drawer.Screen name='CrudUsuarios' component={CrudUsuarios} />
				<Drawer.Screen
					name='CrudCategorias'
					component={CrudCategorias}
				/>
				<Drawer.Screen name='CrudPedidos' component={CrudPedidos} />
				<Drawer.Screen name='Prueba' component={Prueba} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
