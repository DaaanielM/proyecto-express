import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function NombreCompleto() {
	return (
		<View>
			<Text style={styles.text}> Nombre </Text>
			<TextInput style={styles.input} />
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