import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from '../components/Crud/List';
export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<List />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
