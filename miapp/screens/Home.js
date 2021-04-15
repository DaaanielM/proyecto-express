import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Principal from '../components/Home/Principal';
export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Principal />
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
