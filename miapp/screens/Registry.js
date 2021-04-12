import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import NombreCompleto from '../components/Form/NombreComponent';
import Edad from '../components/Form/EdadComponent';
import Usuario from '../components/Form/UsuarioComponent';
import Contra from '../components/Form/ContraComponent';
import Boton from '../components/Form/Button';
import Burger from '../components/Form/Burger';
import ButtonRegister from '../components/Form/ButtonRegister';
import Email from '../components/Form/Email';
import Login from '../screens/Login';
import BotonLogin from '../components/Form/BotonLogin';
import ImagenRegister from '../components/Form/ImagenRegister';

export default function Registry() {
	return (
		<View style={styles.container}>
			<ImagenRegister />

			<Text style={styles.titulo}>Registrarme</Text>
			<View style={styles.form}>
				<Usuario />

				<Email />

				<Contra />

				<ButtonRegister text='Registrarme' />

				<BotonLogin text='Iniciar Sesión' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		backgroundColor: 'transparent',
		padding: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: '#fff',
		marginBottom: 50,
	},
	titulo: {
		margin: 30,
		fontSize: 22,
		color: '#fff',
		fontWeight: 'bold',
		letterSpacing: 1,
	},
});
