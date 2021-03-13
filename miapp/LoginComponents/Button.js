import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Boton({ text, onPress }) {
	return (
		<TouchableOpacity>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		padding: 11,
		backgroundColor: "#f01d71",
		width: 250,
		marginTop: 50,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontSize: 16,
		textAlign: "center",
	},
});
