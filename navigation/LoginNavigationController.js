//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screens(Importación de pantallas a utilizar)
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigationController from '../drawer/DrawerNavigationController';
import CustomDrawerView from '../drawer/CustomDrawerView';

//NativeStackNavigator object creation(Creación de elemento tipo StackNavigator)
const Stack = createNativeStackNavigator();

//Controller to the navigation between client and detail screen(Controlador para la navegación entre las pantallas Clientes y de Detalles)
function LoginNavigationController() {
  return (
      <Stack.Navigator initialRouteName='Login' 
      screenOptions={{
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor: '#394263',
        },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={DrawerNavigationController} options={{headerShown:false}}/>
        <Stack.Screen name="Drawer" component={CustomDrawerView} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default LoginNavigationController;

