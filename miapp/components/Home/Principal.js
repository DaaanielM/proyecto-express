import React from 'react';

import { View, StyleSheet, Text, Image } from 'react-native';

export default function ImagenPrincipal() {
	return (
		<View style={styles.containerImagen}>
			<Image
				style={styles.principal}
				source={{
					uri:
						'https://images.unsplash.com/photo-1591907383498-1f0a836e5b71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
				}}
			/>
			<Text style={styles.title}>Brand Burger</Text>
			<Text style={styles.texto}>
				Disfruta de una Hamburguesa perfecta en Brand Burger, en uno de
				los mejores restaurantes de la ciudad.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	containerImagen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		position: 'relative',
	},
	principal: {
		width: '100%',
		height: '100%',
	},
	title: {
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 42,
		textAlign: 'center',
		position: 'absolute',
		paddingBottom: 380,
		letterSpacing: 2,
		paddingLeft: 10,
		paddingRight: 10,
	},
	texto: {
		fontSize: 24,
		color: 'white',
		textAlign: 'justify',
		position: 'absolute',
		margin: 25,
		fontWeight: 'bold',
		paddingBottom: 70,
	},
});
