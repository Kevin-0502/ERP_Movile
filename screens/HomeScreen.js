//import elements(Importación de elementos básicos de react-native)
import React, {Component} from 'react';
import { ScrollView ,StyleSheet, Text, View, Button } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


function HomeScreen ({navigation}) {
        return(
                <View style={styles.container}>   
                    <Text style={styles.txt}>{'Bienvenido '+global.name +' '+ global.lastname} </Text> 
                </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    txt:{
        textAlign:'center',
        fontSize:RFPercentage(4),
        marginBottom:'40%',
    },
  });

export default HomeScreen;