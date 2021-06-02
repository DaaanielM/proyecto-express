import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default function Usuario() {
	return (
		<View
			style={{
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text style={styles.text}> Usuario </Text>
			<TextInput style={styles.input} />
		</View>
	);
}
const styles = StyleSheet.create({
	text: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 15,
		letterSpacing: 1,
		paddingLeft: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ABABAB',
		borderRadius: 18,
		padding: 8,
		margin: 10,
		width: 250,
		color: '#000',
	},
});
