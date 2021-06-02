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
		color: '#000',
		fontWeight: 'bold',
		fontSize: 15,
		letterSpacing: 1,
		textAlign: 'center',
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ABABAB',
		borderRadius: 18,
		padding: 8,
		width: 250,
		color: '#000',
		marginBottom: 8,
	},
});
