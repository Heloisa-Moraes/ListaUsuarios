import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaUsuarioScreen from './components/ListaUsuarioScreen';
import DetalhesUsuarioScreen from './components/DetalhesUsuarioScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaUsuario">
        <Stack.Screen name="Usuarios" component={ListaUsuarioScreen} options={{ title: 'Lista de Usuários' }} />
        <Stack.Screen name="DetalhesUsuario" component={DetalhesUsuarioScreen} options={{ title: 'Detalhes dos Usuários' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}