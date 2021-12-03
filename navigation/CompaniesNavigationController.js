//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screens(Importación de pantallas a utilizar)
import TransactionScreen from '../screens/TransactionScreen';
import CompaniesScreen from '../screens/CompaniesScreen';
import { RFPercentage } from 'react-native-responsive-fontsize';

//NativeStackNavigator object creation(Creación de elemento tipo StackNavigator)
const Stack = createNativeStackNavigator();

//Controller to the navigation between companie and transaccion screen(Controlador para la navegación entre las pantallas Compañias y de Transacciones)
function CompaniesNavigatorController() {
  return (
      <Stack.Navigator initialRouteName='Lista de Compañias' 
      screenOptions={{
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor: '#394263',
        },
      }}>
        <Stack.Screen name="Lista de Compañias" component={CompaniesScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Ingresos y Egresos" component={TransactionScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default CompaniesNavigatorController;

//options={{headerShown:false}}