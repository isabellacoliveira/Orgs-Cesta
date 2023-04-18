import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import React from 'react';

// obter o tamanho da tela (largura)
const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes da Cesta</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                {/* armazenar o nome da fazenda e a imagem */}
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>
                Uma cesta com produtos selecionados 
                cuidadosamente da fazenda direto para 
                sua cozinha. 
            </Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        // não podemos fixar a altura na tela 
        height: 578 / 768 * width, 
        // essa fonte só é padrão no google fontes 
        // podemos instalar fontes do google via expo 
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
        // só existe no react native
        paddingVertical: 8, 
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26, 
        color: "#464646", 
        fontWeight: 'bold',
        lineHeight: 42
    }, 
    fazenda: {
        // por padrão no react native o flex direction vem como column 
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
        marginLeft: 12
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