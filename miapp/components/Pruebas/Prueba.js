import React, { useState, useEffect } from 'react';

import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const Prueba = () => {
	const [listar, setListar] = useState([]);
	return (
		<View>
			<Card>
				<Card.Title>{item.titulo}</Card.Title>
				<Card.Divider />
				<Card.Image
					source={{
						uri: `https://images.unsplash.com/photo-1622085354806-80fcdcd4ef4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80`,
					}}
				/>
				<Text style={{ marginBottom: 10 }}>
					The idea with React Native Elements is more about component
					structure than actual design.
				</Text>
				<Text>{item.precio}</Text>
				<Button
					icon={<Icon name='code' color='#ffffff' />}
					buttonStyle={{
						borderRadius: 0,
						marginLeft: 0,
						marginRight: 0,
						marginBottom: 0,
					}}
					title='VIEW NOW'
				/>
			</Card>
		</View>
	);
};

export default Prueba;
