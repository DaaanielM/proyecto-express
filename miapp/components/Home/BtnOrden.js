import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const BtnOrden = ({ text }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Menu')}>
			<View>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
		position: 'absolute',
	},
});

export default BtnOrden;
