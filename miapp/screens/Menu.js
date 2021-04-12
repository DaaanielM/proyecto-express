import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImgComponent from '../components/Menu/ImgComponent';

export default function Menu() {
	return (
		<View style={styles.container}>
			<Text stlyle={styles.texto}>Aquí va el menú xd</Text>
			<ImgComponent />
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
