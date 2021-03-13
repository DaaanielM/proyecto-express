import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import NombreCompleto from "./NombreComponent";
import Edad from "./EdadComponent";
import Usuario from "./UsuarioComponent";
import Contra from "./ContraComponent";
import Boton from "./Button";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Login</Text>
			<View style={styles.form}>
				<Usuario />

				<Contra />
			</View>
			<Boton text="Iniciar Sesión" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000000",
		alignItems: "center",
		justifyContent: "center",
	},
	form: {
		backgroundColor: "transparent",
		padding: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "#fff",
	},
	titulo: {
		margin: 30,
		fontSize: 26,
		color: "#f01d71",
		fontWeight: "bold",
		letterSpacing: 1,
	},
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
