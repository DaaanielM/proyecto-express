import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const BotonPedidos = ({ text }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={{ justifyContent: 'center', alignItems: 'center' }}
			onPress={() => navigation.navigate('Menu')}>
			<View style={styles.btnContainer}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

styles = StyleSheet.create({
	btnContainer: {
		backgroundColor: '#F23333',
		width: 280,
		padding: 20,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
		textTransform: 'uppercase',
	},
});

export default BotonPedidos;
