import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import Home from './Home';
import Registry from './Registry';
import Menu from './Menu';

const Drawer = createDrawerNavigator();

export default function Index() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name='Login' component={Login} />
				<Drawer.Screen name='Registry' component={Registry} />
				<Drawer.Screen name='Home' component={Home} />
				<Drawer.Screen name='Menu' component={Menu} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
