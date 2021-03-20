import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

export default function ImagenRegistro() {
	return (
		<View style={styles.containerImagen}>
			<Image
				style={styles.burger}
				source={{
					uri:
						'https://image.freepik.com/vector-gratis/plantilla-formulario-registro-diseno-plano_23-2147971970.jpg',
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	containerImagen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	burger: {
		marginTop: 20,
		borderRadius: 90,
		width: 180,
		height: 180,
	},
});
