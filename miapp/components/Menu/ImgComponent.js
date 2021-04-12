import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function ImgComponent() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.imagen}
				source={{
					uri:
						'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
				}}></Image>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imagen: {
		width: '350px',
	},
});
