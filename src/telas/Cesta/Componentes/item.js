import React from 'react'; 
import Texto from '../../../componentes/Texto'
import { View, Image, StyleSheet } from 'react-native'; 

export default function Item({ item: { nome, imagem }}){
    // função que retorna um componente 
    return <View key={nome} style={estilos.item}>
            <Image source={imagem}  style={estilos.imagem}/>
            <Texto style={estilos.nome}>{nome}</Texto>
        </View>
}

const estilos = StyleSheet.create({ 
    item: {
        flexDirection: "row", 
        borderBottomWidth: 1, 
        boderBottomColor: "#ececec",
        alignItems: "center", 
        paddingVertical: 16, 
        marginHorizontal: 16
    }, 
    imagem: {
        width: 46, 
        height: 46
    }, 
    nome: {
        fontSize: 16,
        lineHeight: 26, 
        marginLeft: 11, 
        color: "#464646"
    }
})