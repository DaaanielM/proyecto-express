import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Principal from '../components/Home/Principal';
import BtnOrden from '../components/Home/BtnOrden';
export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Principal />
			<BtnOrden text='Comprar' />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	texto: {
		color: 'red',
	},
});
