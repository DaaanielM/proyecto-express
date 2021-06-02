import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	Image,
	TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import BotonLogin from '../components/Form/BotonLogin';
// import ImagenRegister from '../components/Form/ImagenRegister';
import { addUser } from '../services/registro/registro';

export default function Registro() {
	const [form, setForm] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		contrasena: '',
	});
	const chanfeForm = (campo, valor) => {
		setForm({ ...form, [campo]: valor });
	};

	const Submit = async () => {
		await addUser(form);
		Alert.alert('Bien hecho', 'Usuario agregado correctamente', [
			{ text: 'OK' },
		]);
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.burger}
					source={require('../Images/registry.png')}
				/>
				<Text style={styles.titulo}>Registrarme</Text>
			</View>
			<View style={styles.form}>
				<View style={styles.formRegistro}>
					<Input
						style={styles.input}
						placeholderTextColor={'gray'}
						placeholder='Nombre'
						//El campo sería nombre y el valor sería valor ( que es lo que pongamos en nuestro input)
						onChangeText={(valor) => chanfeForm('nombre', valor)}
						leftIcon={
							<Icon name='user' size={24} color='#D0D3D3' />
						}
					/>
					<Input
						style={styles.input}
						placeholderTextColor={'gray'}
						placeholder='Correo'
						onChangeText={(valor) => chanfeForm('correo', valor)}
						leftIcon={
							<Icon
								name='envelope-square'
								size={24}
								color='#D0D3D3'
							/>
						}
					/>
					<Input
						style={styles.input}
						placeholderTextColor={'gray'}
						placeholder='Telefono'
						onChangeText={(valor) => chanfeForm('telefono', valor)}
						leftIcon={
							<Icon name='phone' size={24} color='#D0D3D3' />
						}
					/>
					<Input
						secureTextEntry={true}
						style={styles.input}
						placeholderTextColor={'gray'}
						placeholder='Contraseña'
						onChangeText={(valor) =>
							chanfeForm('contrasena', valor)
						}
						leftIcon={<Icon name='key' size={24} color='#D0D3D3' />}
					/>
					<TouchableOpacity onPress={() => Submit()}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Registrarme</Text>
						</View>
					</TouchableOpacity>

					<BotonLogin text='Iniciar Sesión' />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F1C70D',
		width: '100%',
		height: '100%',
	},
	header: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		flex: 1,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 150,
		paddingHorizontal: 30,
		borderColor: '#ABABAB',
		paddingBottom: 320,
	},
	burger: {
		marginTop: 50,
		width: 180,
		height: 180,
	},
	titulo: {
		marginBottom: 20,
		fontSize: 24,
		color: '#fff',
		fontWeight: 'bold',
		letterSpacing: 2,
		color: '#fff',
		textAlign: 'center',
	},
	formRegistro: {
		borderWidth: 1,
		borderColor: '#c6c6c6',
		borderRadius: 30,
		paddingHorizontal: 50,
		paddingVertical: 30,
		marginTop: -110,
	},

	button: {
		borderRadius: 18,
		padding: 12,
		backgroundColor: '#1BC4DE',
		width: 250,
		marginTop: 20,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});
