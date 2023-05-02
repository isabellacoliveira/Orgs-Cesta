import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import React from 'react';
// colocando o nome do arquivo como index, o react native vai identificar o arquivo que esta dentro dessa pasta 
import Cesta from './src/telas/Cesta/index';
// agora podemos usar as fontes globalmente em nossa aplicação 
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import mock from './src/mocks/cesta'
import AppLoading from 'expo-app-loading'

export default function App() {
  // usar as fontes 
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular, 
    "MontserratBold": Montserrat_700Bold
  });
  // não mostrar a aplicação, caso a fonte esteja carregando 
  if(!fonteCarregada){
    return <AppLoading />
  }

  // safeAreaView no ios cria uma margem por fora 
  return (
    // o tamanho do flex sempre será o tamanho da tela inteira 
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      {/* fazer isso é a mesma coisa que fazer topo={mock.topo} e etc */}
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

