// import React, { useState, useEffect } from 'react';
// import { Button, Avatar, Input, Image, Header } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { updateUsuario, getUsuario } from '../../services/perfil/perfil';
// import { StyleSheet, Text, View, Alert } from 'react-native';
// // import { addEmpleado } from '../../services/Index';

// export default function FormModal(props) {
// 	const { closeModal, id } = props;
// 	//Estado
// 	const [form, setForm] = useState({
// 		nombre: '',
// 		correo: '',
// 		telefono: '',
// 		contrasena: '',
// 	});
// 	// Está función solo recibira un campo y un valor
// 	// changeForm
// 	const chanfeForm = (campo, valor) => {
// 		setUser({ ...user, [campo]: valor });
// 	};

// 	const submit = async (event) => {
// 		event.preventDefault();
// 		await updateUsuario(form, id);
// 		closeModal(true);
// 	};
// 	async function loadUsuario() {
// 		const cls = await getUsuario(id);
// 		console.log(cls);
// 		if (cls.status === 200) {
// 			setForm(cls.data.datos);
// 		}
// 	}

// 	useEffect(() => {
// 		debugger;
// 		if (id != 0) {
// 			loadUsuario;
// 		}
// 	}, []);

// 	return (
// 		<View
// 			style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
// 			<View>
// 				<Avatar
// 					rounded
// 					source={{
// 						uri: 'https://cdn.icon-icons.com/icons2/3007/PNG/512/github_logo_icon_188438.png',
// 					}}
// 					size='large'
// 					style={{ width: 50, height: 50 }}
// 				/>
// 				<Text style={styles.Text}>Actualizar perfil</Text>
// 			</View>
// 			<View style={styles.Cont}>
// 				<Input
// 					style={styles.input}
// 					placeholderTextColor={'white'}
// 					placeholder='Nombre'
// 					value={form.nombre}
// 					//El campo sería nombre y el valor sería valor ( que es lo que pongamos en nuestro input)
// 					onChangeText={(valor) => chanfeForm('nombre', valor)}
// 					leftIcon={<Icon name='user' size={24} color='white' />}
// 				/>
// 				<Input
// 					style={styles.input}
// 					value={form.correo}
// 					placeholderTextColor={'white'}
// 					placeholder='Correo'
// 					onChangeText={(valor) => chanfeForm('correo', valor)}
// 					leftIcon={
// 						<Icon name='envelope-square' size={24} color='white' />
// 					}
// 				/>
// 				<Input
// 					style={styles.input}
// 					value={form.telefono}
// 					placeholderTextColor={'white'}
// 					placeholder='Telefono'
// 					onChangeText={(valor) => chanfeForm('telefono', valor)}
// 					leftIcon={<Icon name='phone' size={24} color='white' />}
// 				/>
// 				<Input
// 					secureTextEntry={true}
// 					value={form.contrasena}
// 					style={styles.input}
// 					placeholderTextColor={'white'}
// 					placeholder='Contraseña'
// 					onChangeText={(valor) => chanfeForm('contrasena', valor)}
// 					leftIcon={<Icon name='key' size={24} color='white' />}
// 				/>
// 				<Button
// 					onPress={() => Submit()}
// 					type='solid'
// 					icon={<Icon name='check' size={15} color='white' />}
// 					title='Actualizar'
// 					buttonStyle={{ marginTop: 30 }}>
// 					{id == 0 ? 'Agregar' : 'Actualizar xd'}
// 				</Button>

// 				<Button
// 					onPress={() => closeModal()}
// 					type='solid'
// 					icon={<Icon name='window-close' size={15} color='white' />}
// 					title='Cancelar'
// 					buttonStyle={{ marginTop: 30, backgroundColor: 'red' }}
// 				/>
// 			</View>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	Cont: {
// 		borderRadius: 18,
// 		padding: 12,
// 		backgroundColor: '#020202',
// 		marginTop: 20,
// 		width: '100%',
// 		height: '100%',
// 		margin: 'auto',
// 	},
// 	Text: {
// 		color: '#1985CF',
// 		fontWeight: 'bold',
// 		textTransform: 'uppercase',
// 		fontSize: 16,
// 		textAlign: 'center',
// 	},
// 	Categoria: {
// 		color: '#252525',
// 		marginTop: 8,
// 	},
// 	input: {
// 		borderWidth: 1,
// 		borderColor: '#3390D2',
// 		borderRadius: 18,
// 		marginTop: 20,
// 		padding: 10,
// 		color: 'white',
// 		marginBottom: 20,
// 	},
// });
