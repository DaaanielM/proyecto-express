import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import CardComponent from '../components/Menu/CardComponent';
export default function Menu() {
	return (
		<View style={styles.container}>
			<CardComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	texto: {
		color: 'red',
	},
});
