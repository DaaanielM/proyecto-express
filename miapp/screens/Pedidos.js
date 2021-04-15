import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VistaComponent from '../components/Pedidos/VistaComponent';
const Pedidos = () => {
	return (
		<View style={styles.container}>
			<VistaComponent />
		</View>
	);
};

export default Pedidos;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
