//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//import icons(Importación de iconos para el drawer)
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFPercentage } from 'react-native-responsive-fontsize';//library to get responsive fonts(Librería para tener un tamaño responsivo en el texto)

function CustomDrawerView( props ){

  const {navigation} = props;

  return(

      //Creation of container for drawer principal view(Creación de contenedor para mostrar la interfaz principal del drawer)
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>
                <Text style={{color:'#F19022', fontWeight:'bold', fontSize: RFPercentage(4), marginLeft:20,}}>HyD <Text style={{color:'#1074E7',}}>ERP</Text></Text>
                <Text style={styles.txt}>Usuario (Contador)</Text>
                <Image source={require('../assets/profile.png')} style={{height:70,width:70,padding:20,margin:10,marginBottom:20,}} />
            </View>
            <DrawerItemList {...props}/>

            <View style={styles.logout_container}>
              <TouchableOpacity onPress={ () => navigation.navigate("Login") }>
               <Text style={styles.txt}><Ionicons name='log-out-outline' size={18} color={'#fff'} /> Cerrar Sesión</Text>
              </TouchableOpacity>              
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
        marginTop:'8%',
        height: "auto",
      },
    txt:{
      fontSize:18,
      padding:10,
      color:'#fff',
    },
    drawerHead:{
        backgroundColor:'#091353',
        height:'100%',
    },
  });

export default CustomDrawerView;
