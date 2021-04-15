import React from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
	Image,
	Button,
} from 'react-native';
import BotonPedidos from './BotonPedidos';
import Icon from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const VistaComponent = () => {
	const [count, setCount] = useState(0);
	const [total, setTotal] = useState(0);
	const precioTotal = () => setTotal(total + count);
	const sumar = () => setCount(count + 1);
	const restar = () => setCount(count - 1);
	const navigation = useNavigation();

	return (
		<ScrollView stlye={styles.container}>
			<View style={styles.view}>
				<View style={{ width: '10%' }}>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Icon name='menu' size={32} />
					</TouchableOpacity>
				</View>
				<View style={{ width: '80%', alignItems: 'center' }}>
					<Text
						style={{
							fontWeight: 'bold',
							color: 'black',
							fontSize: 18,
						}}>
						Pedidos
					</Text>
				</View>
				<View style={{ width: '10%' }}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Home')}>
						<Icon name='user' size={25} />
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={{
					paddingHorizontal: 20,
					marginTop: 50,
				}}>
				<Text style={styles.subtitulo}>Tus pedidos</Text>
			</View>
			<ScrollView>
				<SafeAreaView>
					<View
						style={{
							flexDirection: 'row',
							marginTop: 40,
							paddingLeft: 10,
							borderWidth: 1,
							borderColor: '#c6c6c6',
						}}>
						<Image
							style={styles.imagePedido}
							source={require('../../Images/sand.png')}
						/>
						<Text style={styles.nombrePedido}>La zunga</Text>
						<Text style={styles.precioPedido}>$6000</Text>
						<TouchableOpacity
							style={styles.sumarPedido}
							onPress={sumar}>
							<Text style={styles.buttonPedido}>+</Text>
						</TouchableOpacity>
						<Text style={styles.cantidad}>{count}</Text>

						<TouchableOpacity
							style={styles.restarPedido}
							onPress={restar}>
							<Text style={styles.buttonPedido}>-</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginTop: 40,
							paddingLeft: 10,
							borderWidth: 1,
							borderColor: '#c6c6c6',
						}}>
						<Image
							style={styles.imagePedido}
							source={require('../../Images/5.png')}
						/>
						<Text style={styles.nombrePedido}>La zorra</Text>
						<Text style={styles.precioPedido}>$8000</Text>
						<TouchableOpacity
							style={styles.sumarPedido}
							onPress={sumar}>
							<Text style={styles.buttonPedido}>+</Text>
						</TouchableOpacity>
						<Text style={styles.cantidad}>{count}</Text>
						<TouchableOpacity
							style={styles.restarPedido}
							onPress={restar}>
							<Text style={styles.buttonPedido}>-</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							paddingHorizontal: 20,
							marginTop: 50,
							flexDirection: 'row',
							alignItems: 'center',
							marginHorizontal: 30,
						}}>
						<Text style={styles.subtitulo}>Total</Text>
						<Text
							style={styles.precioTotal}
							onPress={{ precioTotal }}>
							${total}
						</Text>
					</View>
					<View style={{}}>
						<BotonPedidos text='Comprar' />
					</View>
				</SafeAreaView>
			</ScrollView>
		</ScrollView>
	);
};

export default VistaComponent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c6c6c6',
	},
	view: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 40,
		marginHorizontal: 20,
	},
	subtitulo: {
		fontWeight: 'bold',
		fontSize: 22,
		color: 'black',
	},
	imagePedido: {
		width: 80,
		height: 80,
	},
	nombrePedido: {
		width: 100,
		height: 25,
		marginLeft: 5,
		fontSize: 17,
		fontWeight: 'bold',
		color: 'black',
		marginTop: 30,
		textAlign: 'center',
	},
	precioPedido: {
		width: 80,
		height: 25,
		textAlign: 'center',
		marginTop: 30,
		fontWeight: 'bold',
		fontSize: 17,
	},
	sumarPedido: {
		width: 50,
		height: 25,
		backgroundColor: '#F23333',
		borderRadius: 100,
		marginTop: 30,
		marginLeft: 20,
	},
	restarPedido: {
		width: 50,
		height: 25,
		backgroundColor: '#F23333',
		borderRadius: 100,
		marginTop: 30,
		fontSize: 18,
	},
	buttonPedido: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'white',
	},
	precioTotal: {
		paddingLeft: 200,
		fontWeight: 'bold',
		fontSize: 22,
	},
	cantidad: {
		marginTop: 10,
		color: '#292929',
	},
});
