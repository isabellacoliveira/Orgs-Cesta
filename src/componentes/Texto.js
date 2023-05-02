import React from 'react'; 
import { Text, StyleSheet } from 'react-native';

export default function Texto({children, style}){
    // estilo padrao 
    let estilo = estilos.texto; 

    // se o font weight for bold, vamos trocar esse estilo 
    // vamos trocar pelos estilos em negrito
    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    }

    // podemos adicionar um array de estilos aqui 
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontSerratRegular',
        fontWeight: 'normal'
    }, 
    textoNegrito: {
        fontFamily: "MontSerratBold",
        fontWeight: 'normal'
    }
})