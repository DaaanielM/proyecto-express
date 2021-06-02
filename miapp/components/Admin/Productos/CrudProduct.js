import React, { useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Modal,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Button, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import {
	getProductos,
	deleteProducto,
} from '../../../services/productos/productos';
import FormModal from './FormModal';

const CrudProduct = () => {
	const navigation = useNavigation();

	const [product, setProduct] = useState([]);
	const [modal, setModal] = useState(false);
	const [id, setId] = useState(0);

	const OpenModal = () => {
		setModal(true);
	};
	const CloseModal = (result) => {
		if (result) {
			loadProducts();
		}
		setModal(false);
		setId(0);
	};
	async function loadProducts() {
		const cls = await getProductos();
		console.log(cls);
		if (cls.status === 200) {
			setProduct(cls.data.datos);
		}
	}
	const actualizar = (id) => {
		setId(id);
		OpenModal();
	};
	const eliminar = async (id) => {
		await deleteProducto(id);
		await loadProducts();
	};
	useEffect(() => {
		loadProducts();
	}, []);
	return (
		<ScrollView style={styles.container}>
			<View style={styles.view}>
				<View style={{ width: '10%' }}>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Icon name='bars' size={28} />
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
						onPress={() => navigation.navigate('Menu')}>
						<Icon name='tag' size={28} />
					</TouchableOpacity>
				</View>
			</View>
			<Text
				style={{
					textAlign: 'center',
					color: '#2BABE2',
					fontWeight: 'bold',
					flex: 1,
					marginTop: 40,
					fontSize: 26,
				}}>
				Listado de productos
			</Text>
			<Button
				icon={{
					name: 'plus',
					color: 'white',
					size: 18,
					type: 'font-awesome',
				}}
				title='Agregar'
				onPress={OpenModal}
				buttonStyle={{
					backgroundColor: '#19B84B',
					marginTop: 5,
					marginBottom: 25,
					width: 250,
					marginLeft: 82,
					padding: 12,
				}}
			/>
			{product.map((item) => (
				<View key={item.id} style={styles.card}>
					<View style={styles.cardxd}>
						<Avatar
							rounded
							source={{
								uri: 'https://image.flaticon.com/icons/png/512/1039/1039328.png',
							}}
							size='large'
							style={{
								width: 50,
								height: 50,
								marginLeft: 140,
								marginBotton: 20,
							}}
						/>
						<Text
							style={{
								color: '#2BABE2',
								fontWeight: 'bold',
								textAlign: 'justify',
								borderColor: '#c6c6c6',
								fontSize: 22,
								marginTop: 5,
							}}>
							Foto:{' '}
							<Text style={styles.nombre}> {item.foto}</Text>
						</Text>
						<Text
							style={{
								color: '#2BABE2',
								fontWeight: 'bold',
								textAlign: 'justify',
								borderColor: '#c6c6c6',
								fontSize: 22,
								marginTop: 5,
							}}>
							Nombre:
							<Text style={styles.nombre}> {item.nombre}</Text>
						</Text>
						<Text
							style={{
								color: '#2BABE2',
								fontWeight: 'bold',
								textAlign: 'justify',
								borderColor: '#c6c6c6',
								fontSize: 22,
								marginTop: 5,
							}}>
							Descripción:
							<Text style={styles.nombre}>
								{' '}
								{item.descripcion}
							</Text>
						</Text>
						<Text
							style={{
								color: '#2BABE2',
								fontWeight: 'bold',
								textAlign: 'justify',
								borderColor: '#c6c6c6',
								fontSize: 22,
								marginTop: 5,
							}}>
							Precio:
							<Text style={styles.nombre}> {item.precio}</Text>
						</Text>
						<Text
							style={{
								color: '#2BABE2',
								fontWeight: 'bold',
								textAlign: 'justify',
								borderColor: '#c6c6c6',
								fontSize: 22,
								marginTop: 5,
							}}>
							Categoría:
							<Text style={styles.nombre}> {item.categoria}</Text>
						</Text>
						<Button
							title='Actualizar'
							icon={{
								name: 'edit',
								color: 'white',
								size: 18,
								type: 'font-awesome',
							}}
							onPress={() => actualizar(item.id)}
							buttonStyle={{
								marginTop: 15,
								width: 180,
								marginLeft: 75,
							}}></Button>
						<Button
							title='Eliminar'
							icon={{
								name: 'trash',
								color: 'white',
								size: 18,
								type: 'font-awesome',
							}}
							onPress={() => eliminar(item.id)}
							buttonStyle={{
								marginTop: 10,
								width: 180,
								marginLeft: 75,
								backgroundColor: 'red',
							}}></Button>
					</View>
				</View>
			))}

			<Modal visible={modal} onClose={CloseModal}>
				<View style={styles.modalContent}>
					<FormModal closeModal={CloseModal} id={id} />
				</View>
			</Modal>
		</ScrollView>
	);
};

export default CrudProduct;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		marginTop: 10,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ABABAB',
		margin: 20,
	},
	nombre: {
		fontWeight: 'bold',
		textAlign: 'justify',
		borderColor: '#c6c6c6',
		fontSize: 18,
		color: '#242525',
		letterSpacing: 0.5,
	},
	cardxd: {
		margin: 20,
	},
	view: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 40,
		marginHorizontal: 20,
	},
});
