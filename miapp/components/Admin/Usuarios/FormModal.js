import React, { useState, useEffect } from 'react';
import { Button, Avatar, Image, Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { updateUsuario, getUsuario } from '../../services/perfil/perfil';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import {
	addUsuario,
	getUsuario,
	updateUsuario,
} from '../../../services/usuarios/usuarios';
// import { addEmpleado } from '../../services/Index';

function FormModal(props) {
	const { closeModal, id } = props;

	const [form, setForm] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		contrasena: '',
	});
	// Está función solo recibira un campo y un valor
	// changeForm
	const changeForm = (campo, valor) => {
		setForm({ ...form, [campo]: valor });
	};

	const Submit = async () => {
		if (id == 0) {
			await addUsuario(form);
		} else {
			await updateUsuario(form, id);
		}
		closeModal(true);
	};
	async function loadUsuarios() {
		const cls = await getUsuario(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadUsuarios();
		}
	}, []);

	return (
		<View
			style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
			<View>
				<Avatar
					rounded
					source={{
						uri: 'https://image.flaticon.com/icons/png/512/2250/2250401.png',
					}}
					size='large'
					style={{
						width: 50,
						height: 50,
						marginLeft: 182,
						marginBottom: 20,
						marginTop: 10,
					}}
				/>
				<Text style={styles.Text}>
					{id == 0 ? 'Agregar' : 'Actualizar'} - {id}
				</Text>
			</View>
			<View style={styles.Cont}>
				<Input
					style={styles.input}
					placeholderTextColor={'white'}
					placeholder='Usuario'
					value={form.nombre}
					//El campo sería nombre y el valor sería valor ( que es lo que pongamos en nuestro input)
					onChangeText={(valor) => changeForm('nombre', valor)}
					leftIcon={<Icon name='user' size={24} color='white' />}
				/>
				<Input
					style={styles.input}
					value={form.correo}
					placeholderTextColor={'white'}
					placeholder='Correo'
					onChangeText={(valor) => changeForm('correo', valor)}
					leftIcon={<Icon name='envelope' size={24} color='white' />}
				/>

				<Input
					value={form.telefono}
					style={styles.input}
					placeholderTextColor={'white'}
					placeholder='Teléfono'
					onChangeText={(valor) => changeForm('telefono', valor)}
					leftIcon={<Icon name='phone' size={24} color='white' />}
				/>

				<Input
					value={form.contrasena}
					style={styles.input}
					placeholderTextColor={'white'}
					placeholder='Contraseña'
					onChangeText={(valor) => changeForm('contrasena', valor)}
					leftIcon={<Icon name='key' size={24} color='white' />}
				/>

				<Button
					onPress={() => Submit()}
					type='solid'
					title='Guardar'
					icon={<Icon name='check' size={15} color='white' />}
					buttonStyle={{ marginTop: 10 }}>
					{id == 0 ? 'Agregar' : 'Actualizar'}
				</Button>

				<Button
					onPress={() => closeModal()}
					type='solid'
					icon={<Icon name='window-close' size={15} color='white' />}
					title='Cancelar'
					buttonStyle={{
						marginTop: 20,
						backgroundColor: 'red',
					}}
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
});

export default FormModal;
