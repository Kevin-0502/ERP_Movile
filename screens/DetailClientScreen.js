//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { ScrollView,StyleSheet, Text, View, Button,Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailClientsScreen({route, navigation}){
  const { itemId } = route.params;
  const { client } = route.params;
  const { companie } = route.params;
  //params from screen client(parametros que vienen de la pantalla cliente)

    return(
        <ScrollView style={styles.scroll_container}>
          <View style={styles.header}> 
            <Ionicons name="arrow-back-outline" size={30} color={'#fff'} onPress={navigation.goBack} />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt1}>{client}</Text>
            <Image source={require('../assets/profile.png')} style={{width:150, height:150,}}/>
            <Text style={styles.txt}>El cliente esta en representación y es el contacto de la empresa: "{companie}" </Text>
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll_container: {
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width:'100%',
      padding:10,
    },
    header:{
      flex: 1,
      backgroundColor:'#9FC73A',
      padding:10,
    },
    txt1:{
      fontSize:RFPercentage(4),
      margin:10,
    },
    txt:{
      fontSize:RFPercentage(3),
      margin:30,
      textAlign:'center',
    },
  });

export default DetailClientsScreen;