import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import React from 'react';
import Cesta from './src/telas/cesta';
// agora podemos usar as fontes globalmente em nossa aplicação 
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'

export default function App() {
  // usar as fontes 
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular, 
    "MontserratBold": Montserrat_700Bold
  });
  // não mostrar a aplicação, caso a fonte esteja carregando 
  if(!fonteCarregada){
    return <View />
  }

  // safeAreaView no ios cria uma margem por fora 
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
