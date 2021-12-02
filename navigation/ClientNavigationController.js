//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screens(Importación de pantallas a utilizar)
import DetailClientsScreen from '../screens/DetailClientScreen';
import ClientsScreen from '../screens/ClientsScreen';

//NativeStackNavigator object creation(Creación de elemento tipo StackNavigator)
const Stack = createNativeStackNavigator();

//Controller to the navigation between client and detail screen(Controlador para la navegación entre las pantallas Clientes y de Detalles)
function ClientNavigationController() {
  return (
      <Stack.Navigator initialRouteName='Lista de Clientes' 
      screenOptions={{
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor: '#394263',
        },
      }}>
        <Stack.Screen name="Lista de Clientes" component={ClientsScreen} />
        <Stack.Screen name="Detalles del cliente" component={DetailClientsScreen} />
      </Stack.Navigator>
  );
}

export default ClientNavigationController;