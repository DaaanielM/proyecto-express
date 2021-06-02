import React, { useState } from 'react';
import { Button, Avatar, Input, Image, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StyleSheet, Text, View, Alert } from 'react-native';
// import Agregar from '../Crud/Agregar';
import { addEmpleado } from '../../services/Index';

export default function List() {
	//Estado
	const [user, setUser] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		contrasena: '',
	});
	// Está función solo recibira un campo y un valor
	// changeForm
	const chanfeForm = (campo, valor) => {
		setUser({ ...user, [campo]: valor });
	};

	// Función para agregar los datos
	const Submit = async () => {
		await addEmpleado(user);
		Alert.alert('Bien hecho', 'Usuario agregado correctamente', [
			{ text: 'OK' },
		]);
	};

	return (
		<View
			style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
			<Header
				leftComponent={{ icon: 'menu', color: '#fff' }}
				centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
				rightComponent={{ icon: 'home', color: '#fff' }}
			/>
			<View style={styles.Cont}>
				<Image
					source={{
						uri: 'https://images.unsplash.com/photo-1554252116-cb46b6d2df78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
					}}
					style={{ width: 390, height: 180, marginBottom: 10 }}
				/>
				<View>
					<Avatar
						rounded
						source={{
							uri: 'https://cdn.icon-icons.com/icons2/3007/PNG/512/github_logo_icon_188438.png',
						}}
						size='large'
						style={{ width: 40, height: 40 }}
					/>
					<Text style={styles.Text}>Registros</Text>
				</View>
				<Input
					style={styles.input}
					placeholderTextColor={'white'}
					placeholder='Nombre'
					//El campo sería nombre y el valor sería valor ( que es lo que pongamos en nuestro input)
					onChangeText={(valor) => chanfeForm('nombre', valor)}
					leftIcon={<Icon name='user' size={24} color='white' />}
				/>
				<Input
					style={styles.input}
					placeholderTextColor={'white'}
					placeholder='Correo'
					onChangeText={(valor) => chanfeForm('correo', valor)}
					leftIcon={
						<Icon name='envelope-square' size={24} color='white' />
					}
				/>
				<Input
					style={styles.input}
					placeholderTextColor={'white'}
					placeholder='Telefono'
					onChangeText={(valor) => chanfeForm('telefono', valor)}
					leftIcon={<Icon name='phone' size={24} color='white' />}
				/>
				<Input
					secureTextEntry={true}
					style={styles.input}
					placeholderTextColor={'white'}
					placeholder='Contraseña'
					onChangeText={(valor) => chanfeForm('contrasena', valor)}
					leftIcon={<Icon name='key' size={24} color='white' />}
				/>
				<Button
					onPress={() => Submit()}
					style={styles.button}
					type='solid'
					icon={<Icon name='arrow-right' size={15} color='white' />}
					title='Agregar'
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	Cont: {
		borderRadius: 18,
		padding: 12,
		backgroundColor: '#020202',
		marginTop: 20,
		width: '100%',
		height: '100%',
		margin: 'auto',
	},
	Text: {
		color: '#1985CF',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
	Categoria: {
		color: '#252525',
		marginTop: 8,
	},
	input: {
		borderWidth: 1,
		borderColor: '#3390D2',
		borderRadius: 18,
		marginTop: 20,
		padding: 10,
		color: 'white',
		marginBottom: 20,
	},
	button: {
		borderRadius: 18,
		padding: 12,
		backgroundColor: '#1985CF',
		marginTop: 20,
		width: 200,
		marginLeft: 60,
	},
});
