import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class FriendsScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>Esta es la vista del Login</Text>

				<Button
					title="Ir a Home"
					onPress={() => this.props.navigation.navigate("Home")}
				/>
			</View>
		);
	}
}

export default FriendsScreen;
