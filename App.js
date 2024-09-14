import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaUsuarioScreen from './components/ListaUsuarioScreen';
import InformacoesUsuarioScreen from './components/InformacoesUsuarioScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaUsuario'>
      <Stack.Screen name="ListaUsuario" component={ListaUsuarioScreen} />
      <Stack.Screen name='InformacoesUsuario' component={InformacoesUsuarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;