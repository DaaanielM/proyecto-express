import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Agregar = ({ text }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Agregar;

const styles = StyleSheet.create({
	button: {
		borderRadius: 18,
		padding: 8,
		backgroundColor: '#E93013',
		width: 150,
		marginBottom: 10,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});
