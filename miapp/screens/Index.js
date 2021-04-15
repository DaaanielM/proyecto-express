import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import Home from './Home';
import Registro from './Registro';
import Menu from './Menu';
import Pedidos from './Pedidos';
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
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
