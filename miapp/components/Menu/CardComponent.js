import React, { useEffect, useState } from 'react';
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
import { api, getProductos } from '../../services/Index';
import { getCategoria } from '../../services/categorias/categorias';

const CardComponent = () => {
	const navigation = useNavigation();
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const response = await getProductos();
			const resCat = await getCategoria();
			if (response.status === 200) {
				setProducts(response.data.datos);
			}
			if (resCat.status === 200) {
				setCategories(resCat.data.datos);
			}
		}
		loadProducts();
	}, []);

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
				{categories.map((item) => (
					<View
						key={item.id}
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
							source={require('../../Images/xdd.png')}
						/>
						<Text style={styles.textImg}>{item.nombre}</Text>
					</View>
				))}
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
					{products.map((product) => {
						return (
							<View style={styles.card} key={product.id}>
								<Image
									style={styles.imageProduct}
									source={{
										uri: api + 'img/' + product.foto,
									}}
								/>
								<Text style={styles.nameProduct}>
									{product.nombre}
								</Text>
								<Text style={styles.descripProduct}>
									{product.descripcion}
								</Text>
								<Text style={styles.precioProduct}>
									<Text style={{ color: '#2BBA18' }}>$ </Text>
									{product.precio}
								</Text>
								<Agregar text='Agregar' />
							</View>
						);
					})}
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
		color: 'black',
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
		color: '#EA1E1E',
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
