import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function Contra() {
	return (
		<View>
			<Text style={styles.text}>Contraseña </Text>
			<TextInput style={styles.input} secureTextEntry={true} />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "#f01d71",
		fontWeight: "bold",
		fontSize: 16,
		textAlign: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "#F8F8F8",
		borderRadius: 5,
		padding: 7,
		margin: 10,
		width: 250,
		color: "#fff",
	},
});
