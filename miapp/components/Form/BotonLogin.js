import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BotonLogin({ text, onPress }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Login')}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 18,
		padding: 9,
		backgroundColor: '#FC1515',
		marginTop: 20,
		margin: 10,
		width: 250,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});