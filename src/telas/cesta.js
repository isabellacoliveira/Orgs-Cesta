import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import React from 'react';
import Texto from '../componentes/Texto';

// obter o tamanho da tela (largura)
const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                {/* armazenar o nome da fazenda e a imagem */}
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados 
                cuidadosamente da fazenda direto para 
                sua cozinha. 
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
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
    cesta : {
        paddingVertical: 8, 
        paddingHorizontal: 16
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
    }
})