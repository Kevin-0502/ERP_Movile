//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
// import screens(Importación de pantallas a utilizar)
import HomeScreen from '../screens/HomeScreen';
import ClientNavigationController from '../navigation/ClientNavigationController';
import CompaniesNavigatorController from '../navigation/CompaniesNavigationController';
//import icons(Importación de iconos para el drawer)
import Ionicons from 'react-native-vector-icons/Ionicons';
//import drawer views(Importación de vista principal del drawer)
import CustomDrawerView from './CustomDrawerView';

const Drawer = createDrawerNavigator();//drawer const management(Controlador para acciones tipo "Drawer") 

function DrawerNavigationController({route}) {

  return (    
      //Drawer Navigation settings(Configuración del Dr|  awer Navigation) line:20
      //Screens ready to show(Declaración de las pantallas listas para mostrar) line:33,39 
          <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerView {... props}/>}
            screenOptions={{
              headerTintColor:'#fff',
              headerStyle:{
                backgroundColor: '#9FC73A',
              },
              drawerActiveTintColor: '#F19022',
              drawerInactiveTintColor:'#fff',
              drawerLabelStyle: {
              marginLeft: -25,
              fontSize: 15,
            },
            }}
          >
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                  drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                  ),
                }}
              />
            <Drawer.Screen name="Clientes" component={ClientNavigationController} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="people-circle-outline" size={22} color={color} />
                ),
              }}
            />
            <Drawer.Screen name="Transaccion" component={CompaniesNavigatorController} options={{
                drawerIcon: ({color}) => (
                  <Ionicons name="logo-usd" size={22} color={color} />
                ),
              }}
            />
          </Drawer.Navigator>
    );
  }
  
  export default DrawerNavigationController;