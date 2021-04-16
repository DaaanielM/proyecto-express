import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import User from '../components/Perfil/User';
const Perfil = () => {
	return (
		<View style={styles.container}>
			<User />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Perfil;
