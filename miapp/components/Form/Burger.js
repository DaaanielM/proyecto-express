import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

export default function Burger() {
	return (
		<View style={styles.containerImagen}>
			<Image
				style={styles.burger}
				source={{
					uri:
						'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
		borderRadius: 8,
	},
	burger: {
		borderRadius: 90,
		width: 220,
		height: 220,
	},
});
