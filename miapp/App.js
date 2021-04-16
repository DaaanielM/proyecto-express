import * as React from 'react';
import { View, Text } from 'react-native';

import Index from './routers/Index';

export default function App() {
	return <Index />;
}

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import HomeScreen from "./HomeScreen";
// // import LoginScreen from "./LoginScreen";
// import Login from './LoginComponents/Login';
// const Stack = createStackNavigator();

// export default function App() {
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator>
// 				<Stack.Screen name='Login' component={Login} />
// 				{/* <Stack.Screen name='Home' component={HomeScreen} />
// 				<Stack.Screen name='Login' component={LoginScreen} /> */}
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// }
