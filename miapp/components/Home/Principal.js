import React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';

import BtnOrden from './BtnOrden';
import { WebView } from 'expo';

export default function ImagenPrincipal() {
	return (
		<View style={styles.containerImagen}>
			<Image
				style={styles.principal}
				source={{
					uri:
						'https://image.freepik.com/vector-gratis/hamburguesa-comida-rapida-estilo-pop-art_24908-61700.jpg',
				}}
			/>
			<Text style={styles.title}>Brand Burger</Text>
			<Text style={styles.texto}>
				Compra y disfruta una de nuestras deliciosas Hamburguesas
			</Text>
			<View style={styles.indicadorContainer}>
				<View style={styles.indicador} />
				<View style={styles.current} />
				<View style={styles.current} />
			</View>
			<BtnOrden text='Comprar ahora' />
		</View>
	);
}
const styles = StyleSheet.create({
	containerImagen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	principal: {
		borderRadius: 190,
		width: 320,
		height: 320,
	},
	title: {
		marginTop: 50,
		textTransform: 'uppercase',
		fontSize: 30,
		fontWeight: 'bold',
		letterSpacing: 2,
	},
	texto: {
		marginTop: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#787777',
		marginLeft: 50,
		marginRight: 50,
	},
	indicadorContainer: {
		marginTop: 80,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
	},
	indicador: {
		height: 12,
		width: 30,
		borderRadius: 10,
		backgroundColor: '#F23333',
		marginHorizontal: 5,
	},
	current: {
		height: 12,
		width: 12,
		borderRadius: 6,
		backgroundColor: '#787777',
		marginHorizontal: 5,
	},
});

// const styles = StyleSheet.create({
// 	containerImagen: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		width: '100%',
// 		position: 'relative',
// 	},
// 	principal: {
// 		width: '100%',
// 		height: 400,
// 	},
// 	title: {
// 		color: 'white',
// 		textTransform: 'uppercase',
// 		fontWeight: 'bold',
// 		fontSize: 42,
// 		textAlign: 'center',
// 		position: 'absolute',
// 		paddingBottom: 380,
// 		letterSpacing: 2,
// 		paddingLeft: 10,
// 		paddingRight: 10,
// 	},
// 	texto: {
// 		fontSize: 24,
// 		color: 'white',
// 		textAlign: 'justify',
// 		position: 'absolute',
// 		margin: 50,
// 		fontWeight: 'bold',
// 		paddingBottom: 70,
// 	},
// }
// });

{
	/* */
}
