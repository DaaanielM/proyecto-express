import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

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
		color: '#FC1515',
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
		letterSpacing: 1,
	},
	input: {
		borderWidth: 1,
		borderColor: '#F8F8F8',
		borderRadius: 5,
		padding: 7,
		margin: 10,
		width: 250,
		color: '#fff',
	},
});
