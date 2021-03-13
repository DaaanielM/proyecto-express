// import * as React from "react";
// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./LoginComponents/Login";
// import Home from "./HomeComponents/Home";

// const Stack = createStackNavigator();

// export default function App() {
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator>
// 				<Stack.Screen name="Login" component={Login} />
// 				<Stack.Screen name="Home" component={Home} />
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// }
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
