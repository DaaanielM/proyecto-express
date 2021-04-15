import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import NombreCompleto from '../components/Form/NombreComponent';
import Edad from '../components/Form/EdadComponent';
import Usuario from '../components/Form/UsuarioComponent';
import Contra from '../components/Form/ContraComponent';
import Boton from '../components/Form/Button';
import ButtonRegister from '../components/Form/ButtonRegister';
import Email from '../components/Form/Email';
import Error from '../components/Form/Error';

export default function Login() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.burger}
					source={require('../Images/5.png')}
				/>
				<Text style={styles.titulo}>Inicia Sesión</Text>
			</View>

			<View style={styles.form}>
				{/* <Error error={'El usuario o la contraseña son incorrectos'} /> */}

				<View style={styles.formContainer}>
					<Usuario />

					<Contra />

					<Boton text='Iniciar Sesión' />

					<ButtonRegister text='Registrarme' />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E93013',
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
		paddingBottom: 300,
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
	burger: {
		marginTop: 50,
		width: 180,
		height: 180,
	},
	formContainer: {
		borderWidth: 1,
		borderColor: '#c6c6c6',
		borderRadius: 30,
		paddingHorizontal: 50,
		paddingVertical: 30,
		marginTop: -40,
	},
});
