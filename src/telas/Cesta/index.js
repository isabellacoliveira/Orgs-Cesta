import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import Topo from "./Componentes/Topo";
import Detalhes from "./Componentes/Detalhes";
import Texto from "../../componentes/Texto";
import Item from './Componentes/item';

export default function Cesta({ topo, detalhes, itens }) {
	// no lugar do fragment vamos colocar uma scroll view
	// com o scroll view podemos fazer o scroll da nossa aplicação
	return (
		<>
			<FlatList
				data={itens.lista}
				renderItem={Item}
				keyExtractor={({ nome }) => nome}
				ListHeaderComponent={() => {
					return (
						<>
							<Topo {...topo} />
							<View style={estilos.cesta}>
								<Detalhes {...detalhes} />
								<Texto style={estilos.titulo}>
									{itens.titulo}
								</Texto>
							</View>
						</>
					);
				}}
			/>
		</>
	);
}

const estilos = StyleSheet.create({
	cesta: {
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	titulo: {
		color: "#464646",
		fontWeight: "bold",
		marginTop: 32,
		marginBottom: 8,
		fontSize: 28,
		lineHeight: 32,
	},
});
