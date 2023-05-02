import { StyleSheet, View } from 'react-native';
import React from 'react';
import Topo from './Componentes/Topo'; 
import Detalhes from './Componentes/Detalhes'

export default function Cesta({topo, detalhes}){
    return <>
        <Topo {...topo}/>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta : {
        paddingVertical: 8, 
        paddingHorizontal: 16
    }
})