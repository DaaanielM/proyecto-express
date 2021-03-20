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

export default function App() {
	return (
		<View style={styles.container}>
			<Burger />

			<Text style={styles.titulo}>Inicia Sesión</Text>
			<View style={styles.form}>
				<Usuario />

				<Contra />

				<Boton text='Iniciar Sesión' />

				<ButtonRegister text='Registrarme' />

				<Text>Brand Code &copy; 2021</Text>
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
		borderColor: '#ABABAB',
		marginBottom: 100,
		width: '80%',
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
});
