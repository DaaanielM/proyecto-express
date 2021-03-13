import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class HomeScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>Esta es la vista de Home</Text>

				<Button
					title="Ir a Login"
					onPress={() => this.props.navigation.navigate("Login")}
				/>
			</View>
		);
	}
}

export default HomeScreen;
