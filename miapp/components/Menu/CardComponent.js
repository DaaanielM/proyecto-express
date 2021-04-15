import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Agregar from './Agregar';
import Icon from '@expo/vector-icons/Entypo';

const CardComponent = () => {
	const navigation = useNavigation();

	return (
		<ScrollView style={styles.container}>
			<View style={styles.view}>
				<View style={{ width: '10%' }}>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Icon name='menu' size={32} />
					</TouchableOpacity>
				</View>
				<View style={{ width: '80%', alignItems: 'center' }}>
					<Text
						style={{
							fontWeight: 'bold',
							color: 'black',
							fontSize: 18,
						}}>
						Menu
					</Text>
				</View>
				<View style={{ width: '10%' }}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Pedidos')}>
						<Icon name='shopping-cart' size={28} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ paddingHorizontal: 20, marginTop: 50 }}>
				<Text style={styles.subtitulo}>Haz tu pedido</Text>
				<Text style={styles.sub}>Encuentra tu comida favorita...</Text>
			</View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ marginTop: 40 }}>
				<View
					style={{
						alignItems: 'center',
						flexDirection: 'row',
						backgroundColor: '#f9dd7a',
						marginHorizontal: 15,
						borderRadius: 25,
						paddingVertical: 5,
						paddingHorizontal: 15,
					}}>
					<Image
						style={styles.imageHorizontal}
						source={require('../../Images/5.png')}
					/>
					<Text style={styles.textImg}>Burgers</Text>
				</View>
				<View
					style={{
						alignItems: 'center',
						flexDirection: 'row',
						backgroundColor: '#e5e4eb',
						marginHorizontal: 15,
						borderRadius: 25,
						paddingVertical: 5,
						paddingHorizontal: 15,
					}}>
					<Image
						style={styles.imageHorizontal}
						source={require('../../Images/sand.png')}
					/>
					<Text style={styles.textImg}>Sandwichs</Text>
				</View>
				<View
					style={{
						alignItems: 'center',
						flexDirection: 'row',
						backgroundColor: '#D6F9C6',
						marginHorizontal: 15,
						borderRadius: 25,
						paddingVertical: 5,
						paddingHorizontal: 15,
					}}>
					<Image
						style={styles.imageHorizontal}
						source={require('../../Images/ensalada.png')}
					/>
					<Text style={styles.textImg}>Ensaladas</Text>
				</View>
				<View
					style={{
						alignItems: 'center',
						flexDirection: 'row',
						backgroundColor: '#EDA7FA',
						marginHorizontal: 15,
						borderRadius: 25,
						paddingVertical: 5,
						paddingHorizontal: 15,
					}}>
					<Image
						style={styles.imageHorizontal}
						source={require('../../Images/soda.png')}
					/>
					<Text style={styles.textImg}>Bebidas</Text>
				</View>
			</ScrollView>

			<View
				style={{
					alignItems: 'center',
					marginHorizontal: 20,
					flexDirection: 'row',
					marginTop: 40,
				}}>
				<View style={{ width: '50%' }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}>
						Nuestros productos
					</Text>
				</View>
				<View style={{ width: '50%', alignItems: 'flex-end' }}>
					<Icon
						name='dots-three-horizontal'
						size={25}
						color='#848385'
					/>
				</View>
			</View>
			<ScrollView>
				<View
					style={{
						marginHorizontal: 15,
						marginTop: 5,
					}}>
					<View style={styles.card}>
						<Image
							style={styles.imageProduct}
							source={require('../../Images/h1.jpg')}
						/>
						<Text style={styles.nameProduct}>La zorra</Text>
						<Text style={styles.descripProduct}>
							Tiene carne, vegetales y queso
						</Text>
						<Text style={styles.precioProduct}>$ 8000</Text>
						<Agregar text='Agregar' />
					</View>
					<View style={styles.card}>
						<Image
							style={styles.imageProduct}
							source={require('../../Images/h2.jpg')}
						/>
						<Text style={styles.nameProduct}>La bandida</Text>
						<Text style={styles.descripProduct}>
							Tiene doble carne, vegetales y doble queso
						</Text>
						<Text style={styles.precioProduct}>$ 8000</Text>
						<Agregar text='Agregar' />
					</View>
					<View style={styles.card}>
						<Image
							style={styles.imageProduct}
							source={require('../../Images/h4.jpg')}
						/>
						<Text style={styles.nameProduct}>La picara</Text>
						<Text style={styles.descripProduct}>
							Tiene carne, salchicha y vegetales
						</Text>
						<Text style={styles.precioProduct}>$ 12000</Text>
						<Agregar text='Agregar' />
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
};

export default CardComponent;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#fff',
	},
	view: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 40,
		marginHorizontal: 20,
	},
	subtitulo: {
		fontSize: 25,
		fontWeight: 'bold',
	},
	sub: {
		fontSize: 16,
		color: '#787777',
		marginTop: 10,
		marginBottom: -10,
	},

	imageHorizontal: {
		height: 40,
		width: 40,
	},
	textImg: {
		fontWeight: 'bold',
		fontSize: 18,
		paddingLeft: 10,
		color: '#252525',
	},
	card: {
		width: '80%',
		alignItems: 'center',
		alignSelf: 'center',
		borderWidth: 1,
		borderColor: '#c0c0c0',
		borderRadius: 10,
		marginTop: 18,
		marginBottom: 20,
	},
	imageProduct: {
		width: '100%',
		height: 150,
	},
	nameProduct: {
		textAlign: 'center',
		marginTop: 8,
		color: 'black',
		fontWeight: 'bold',
		fontSize: 22,
	},
	descripProduct: {
		textAlign: 'center',
		marginTop: 6,
		color: 'black',
		fontWeight: 'bold',
		fontSize: 16,
	},
	precioProduct: {
		textAlign: 'center',
		marginTop: 6,
		marginBottom: 8,
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
