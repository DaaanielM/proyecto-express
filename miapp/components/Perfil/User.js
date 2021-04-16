import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const User = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.view}>
				<View style={{ width: '10%' }}>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Icon
							style={{ color: 'white' }}
							name='menu'
							size={32}
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
				<Image
					style={styles.image}
					source={require('../../Images/usuario.png')}
				/>
				<Text style={styles.texto}>Información personal</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.nombre}>Nombre: Daniel Brand</Text>
				<Text style={styles.nombre}>Correo: dani@gmail.com</Text>

				<Text style={styles.nombre}>Teléfono: 3213769938</Text>

				<Text style={styles.nombre}>Dirección: Cll 9 #18-51</Text>
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
		backgroundColor: '#F2F9FC',

		borderWidth: 1,
		borderColor: '#c6c6c6',
		paddingHorizontal: 150,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	nombre: {
		marginTop: 44,
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		borderRadius: 20,
		width: 280,
		borderWidth: 1,
		borderColor: '#c6c6c6',
		marginLeft: -82,
		fontSize: 18,
		color: '#000000',
		padding: 20,
		letterSpacing: 1,
	},
});
