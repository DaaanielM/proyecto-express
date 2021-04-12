import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Error({ error }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	text: {
		color: '#EC0E0E',
		width: 300,
		margin: 2,
		textAlign: 'center',
	},
});
