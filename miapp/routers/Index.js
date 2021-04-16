import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
