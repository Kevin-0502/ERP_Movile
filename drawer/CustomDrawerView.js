//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//import icons(Importación de iconos para el drawer)
import Ionicons from 'react-native-vector-icons/Ionicons';

function CustomDrawerView(props){
    return(

      //Creation of container for drawer principal view(Creación de contenedor para mostrar la interfaz principal del drawer)
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>
                <Text style={styles.txt}><Ionicons name="leaf-outline" size={22} color={'#fff'} />HyDERP</Text>
                <Text style={styles.txt}>Usuario (Contador)</Text>
                <Image source={require('../assets/profile.png')} style={{height:70,width:70,padding:20,margin:10,marginBottom:20,}} />
            </View>
            <DrawerItemList {...props}/>
            <View style={styles.logout_container}>
                <Text style={styles.txt}>Cerrar Sesión</Text>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      height: "auto",
    },
    logout_container: {
        flex: 1,
        justifyContent: 'flex-end',
        height: "auto",
      },
    txt:{
      fontSize:18,
      padding:10,
      color:'#fff',
    },
    drawerHead:{
        backgroundColor:'#394263',
        height:'100%',
    },
  });

export default CustomDrawerView;
