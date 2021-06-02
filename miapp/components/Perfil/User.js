import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Button, Text, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormModal from './FormModal';
// import Icon from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

import { getPerfil, getDirecciones } from '../../services/perfil/perfil';

const User = () => {
	const navigation = useNavigation();

	const [perfil, setPerfil] = useState([]);
	const [direccion, setDireccion] = useState([]);
	
	// Actualizar
	async function loadPerfil() {
		const response = await getPerfil();
		const dir = await getDirecciones();
		if (response.status === 200) {
			setPerfil(response.data.datos[0]);
		}
		if (dir.status === 200) {
			setDireccion(dir.data.datos[0]);
		}
	}
	// const updateUsuario = (id) => {
	// 	setId(id);
	// 	OpenModal();
	// };
	useEffect(() => {
		loadPerfil();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.view}>
				<View style={{ width: '10%' }}>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Icon
							style={{ color: 'white' }}
							name='bars'
							size={28}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ width: '80%', alignItems: 'center' }}>
					<Text
						style={{
							fontWeight: 'bold',
							color: 'white',
							fontSize: 18,
						}}>
						Perfil
					</Text>
				</View>
				<View style={{ width: '10%' }}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Pedidos')}>
						<Icon
							style={{ color: 'white' }}
							name='arrow-left'
							size={25}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.header}>
				<Avatar
					rounded
					source={{
						uri: 'https://cdn.icon-icons.com/icons2/3007/PNG/512/github_logo_icon_188438.png',
					}}
					size='large'
					style={{ width: 120, height: 120 }}
				/>
				<Text style={styles.texto}>Información personal</Text>
			</View>
			<View style={styles.card}>
				<View style={styles.cardxd} key={perfil.id}>
					<Text
						style={{
							color: '#2BABE2',
							fontWeight: 'bold',
							textAlign: 'justify',
							borderColor: '#c6c6c6',
							fontSize: 22,
							letterSpacing: 0.5,
							marginTop: 50,
							marginLeft: 65,
						}}>
						Nombre:{' '}
						<Text style={styles.nombre}>{perfil.nombre}</Text>
					</Text>
					<Text
						style={{
							color: '#2BABE2',
							fontWeight: 'bold',
							textAlign: 'justify',
							borderColor: '#c6c6c6',
							fontSize: 22,
							letterSpacing: 0.5,
							marginTop: 50,
							marginLeft: 65,
						}}>
						Correo:{' '}
						<Text style={styles.nombre}>{perfil.correo}</Text>
					</Text>
					<Text
						style={{
							color: '#2BABE2',
							fontWeight: 'bold',
							textAlign: 'justify',
							borderColor: '#c6c6c6',
							fontSize: 22,
							letterSpacing: 0.5,
							marginTop: 50,
							marginLeft: 65,
						}}>
						Teléfono:{' '}
						<Text style={styles.nombre}>{perfil.telefono}</Text>
					</Text>
					<Text
						style={{
							color: '#2BABE2',
							fontWeight: 'bold',
							textAlign: 'justify',
							borderColor: '#c6c6c6',
							fontSize: 22,
							letterSpacing: 0.5,
							marginTop: 50,
							marginLeft: 65,
						}}>
						Contraseña:{' '}
						<Text style={styles.nombre}>{perfil.contrasena}</Text>
					</Text>
					<Text
						style={{
							color: '#2BABE2',
							fontWeight: 'bold',
							textAlign: 'justify',
							borderColor: '#c6c6c6',
							fontSize: 22,
							letterSpacing: 0.5,
							marginTop: 50,
							marginLeft: 65,
						}}>
						Dirección:{' '}
						<Text style={styles.nombre}>
							{direccion.direccion} - {direccion.barrio}
						</Text>
					</Text>
				</View>
				
			</View>
		</View>
	);
};

export default User;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#2BABE2',
	},
	view: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 40,
		marginHorizontal: 20,
	},
	header: {
		flex: 1,
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 150,
		height: 150,
		borderWidth: 1,
		borderColor: '#c9c9c9',
		borderRadius: 80,
	},
	texto: {
		marginTop: 20,
		fontSize: 22,
		textAlign: 'center',
		color: '#252525',
		fontWeight: 'bold',
		color: '#FEC70B',
	},
	card: {
		flex: 2,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderColor: '#ABABAB',
	},
	nombre: {
		fontWeight: 'bold',
		textAlign: 'justify',
		borderColor: '#c6c6c6',
		fontSize: 18,
		color: '#000000',
		letterSpacing: 0.5,
		marginTop: 50,
		marginLeft: 65,
	},
	cardxd: {
		marginBottom: 40,
	},
});
