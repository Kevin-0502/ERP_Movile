//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import drawer views(Importación de vista principal del drawer con todas las pantallas de la app)
import DrawerNavigationController from './drawer/DrawerNavigationController';

 function App() {
  return (
    //Creation of container to get all screens(Creación de contenedor para mostrar las pantallas diseñadas)
    <NavigationContainer>
      <DrawerNavigationController/>
    </NavigationContainer>
  );
}

export default App;