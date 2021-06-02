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
	getUsuarios,
	deleteUsuario,
} from '../../../services/usuarios/usuarios';
import FormModal from './FormModal';

const CrudUsuarios = () => {
	const navigation = useNavigation();

	const [listar, setListar] = useState([]);
	const [modal, setModal] = useState(false);
	const [id, setId] = useState(0);

	const OpenModal = () => {
		setModal(true);
	};
	const CloseModal = (result) => {
		if (result) {
			loadUsuarios();
		}
		setModal(false);
		setId(0);
	};
	async function loadUsuarios() {
		const cls = await getUsuarios();
		console.log(cls);
		if (cls.status === 200) {
			setListar(cls.data.datos);
		}
	}
	const actualizar = (id) => {
		setId(id);
		OpenModal();
	};
	const eliminar = async (id) => {
		await deleteUsuario(id);
		await loadUsuarios();
	};
	useEffect(() => {
		loadUsuarios();
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
						Users
					</Text>
				</View>
				<View style={{ width: '10%' }}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Registro')}>
						<Icon name='user' size={28} />
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
				Listado de usuarios
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
			{listar.map((item) => (
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
							Usuario:{' '}
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
							Correo:
							<Text style={styles.nombre}> {item.correo}</Text>
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
							Teléfono:
							<Text style={styles.nombre}> {item.telefono}</Text>
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
							Contraseña:
							<Text style={styles.nombre}>
								{' '}
								{item.contrasena}
							</Text>
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

export default CrudUsuarios;

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
