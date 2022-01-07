//import elements(Importación de elementos básicos de react-native)
import React, {Component} from 'react';
import { useState } from 'react';
import { ScrollView ,StyleSheet, Text, View, Button } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

  //Method to get users data(metodo para obtener los datos del usuarios)
  const  getUserDataApi = (email,token) => {

    var url = 'https://hyderp.herokuapp.com/api/userdata?email='+email+'&api_key=key_cur_prod_ftPqyBiQEf7Vcb9wKwbCf65c378VGyBB'

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }).then(res => {
        return res.json().then(resJson => {
         let result = [];
          Object.values(resJson).forEach(i => {
            result = result.concat(i)
          });
          return result[0];
        });
      });
}//fin get users data Apis

function HomeScreen ({navigation}) {
  
  //Variables for set authenticated user data (Variables para establecer datos de usuario autenticado)
  const [ id, setId ] = useState("");
  const [ name, setName ] = useState("");
  const [ lastname, setLastname ] = useState("");

  getUserDataApi(global.email,global.token).then((responsedata) =>{ 
    setId(responsedata.id);
    setName(responsedata.name);
    setLastname(responsedata.last_name);
  });

        return(
                <View style={styles.container}>   
                    <Text style={styles.txt}>{'Bienvenido\n'+name+' '+lastname}</Text> 
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