import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default function Email() {
	return (
		<View>
			<Text style={styles.text}> Email </Text>
			<TextInput style={styles.input} />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
		letterSpacing: 1,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ABABAB',
		borderRadius: 18,
		padding: 7,
		margin: 10,
		width: 250,
		color: '#fff',
	},
});
