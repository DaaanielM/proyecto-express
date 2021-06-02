import React from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Edad() {
	return (
		<View>
			<Text style={styles.text}>Edad</Text>
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
		borderColor: '#ABABAB',
		borderRadius: 5,
		padding: 7,
		margin: 10,
		width: 250,
		color: 'black',
	},
});
