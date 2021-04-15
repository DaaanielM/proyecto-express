import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default function Contra() {
	return (
		<View
			style={{
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text style={styles.text}>Contraseña </Text>
			<TextInput style={styles.input} secureTextEntry={true} />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 15,
		letterSpacing: 1,
		paddingLeft: 15,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ABABAB',
		borderRadius: 18,
		padding: 8,
		margin: 10,
		width: 250,
		color: '#fff',
	},
});
