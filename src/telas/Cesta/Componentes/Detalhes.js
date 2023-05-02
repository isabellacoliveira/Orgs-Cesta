import React from 'react'; 
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto'

// obter o tamanho da tela (largura)
const width = Dimensions.get('screen').width;

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return <>
        <Text style={estilos.nome}>{nome}</Text>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>

            <TouchableOpacity style={estilos.botao} onPress={() => {}}>
                <Texto style={estilos.textoBotao}>
                    {botao}
                </Texto>
            </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, 
        fontFamily: 'Montserrat'
    }, 
    titulo: {
        width: "100%",
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white', 
        fontWeight: 'bold',
        padding: 16
    }, 
    nome: {
        fontSize: 26, 
        color: "#464646", 
        lineHeight: 42,
        // não precisamos colocar fontWeight bold pois o normal dela já é bold
        fontFamily: "MontserratBold", 
        fontWeight: 'bold'
    }, 
    fazenda: {
        flexDirection: 'row', 
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32, 
        height: 32
    },
    nomeFazenda: {
        fontSize: 16, 
        lineHeight: 26, 
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    }, 
    descricao: {
        color: "#a3a3a3",
        fontSize: 16, 
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: 'bold', 
        fontSize: 26, 
        lineHeight: 42, 
        marginTop: 8
    },
    botao: {
        marginTop: 16, 
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6
    }, 
    textoBotao: {
        textAlign: 'center', 
        color: '#ffffff', 
        fontSize: 16, 
        lineHeight: 26, 
        fontWeight: 'bold'
    }
})