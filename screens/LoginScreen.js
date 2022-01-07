//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { Component } from 'react';
import { ScrollView ,StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, CheckBox,  } from 'react-native';
import { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { Checkbox } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';//import icons(Importación de iconos)
import { RFPercentage } from 'react-native-responsive-fontsize';//library to get responsive fonts(Librería para tener un tamaño responsivo en el texto)

//Method to post in API and get users and passwords to authenticated(metodo para hacer post a la API y obtener usuarios y contraseñas para validarlos)
const AuthenticateDataApi = (emaildata, passworddata) => {

  var url = 'https://hyderp.herokuapp.com/api/login';
  var data = { email: emaildata, password: passworddata };

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      return res.json().then(resJson => {
        console.log(resJson);
        let result = [];
        Object.values(resJson).forEach(i => {
          result = result.concat(i)
          
        });
        let status = result[0];
        let token = result[1];
        global.token = token;
        global.email = emaildata;
        console.log(token)
        return status;
      });
    });
}//fin get users Apis

//Login Screen with user's email and password(Pantalla de login con email y contraseñas de los usuarios)
const LoginScreen = ({navigation}) => {

  const [user, setUser] = useState('');//Variable for get the input user(variable para capturar el input de usuario)
  const [password, setPassword] = useState('');//Variable for get the input password(variable para capturar el input de contraseña)
  const [showhide, setShowhide] = useState(true);//Variable to protect the password(variable para mostrar y esconder la contraseña)
  const [checked, setChecked] = useState(false);//variable for checkbox to remember user email(variable para checkbox para recordar correo de usuario)
  const [loading, setLoading] = useState(false);//variable for loading spinner(variable para el spinner de loading)

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };//constante para iniciar el spinner y mostar la carga de los datos

  return(
        <ScrollView style={styles.scroll_container}>
            <View style={styles.container}>  
                <Spinner
                  //visibility of Overlay Loading Spinner
                  visible={loading}
                  //Text with the Spinner
                  textContent={'Loading...'}
                  //Text style of the Spinner Text
                  textStyle={{color:'#FFFFFF',}}
                />              
                <Image source={require('../assets/logo.png')} style={{borderRadius:15,height: 130, width: 280, margin:10,}} />
                <View style={{width:'80%',}}>
                  <TextInput style={styles.inputTxt} placeholder='example@gmail.com' onChangeText={user => setUser(user)} defaultValue={user} />
                </View>
                <View style={styles.passwordview}>
                  <TouchableOpacity onPress={() =>{
                    if (showhide) {setShowhide(false)}else{setShowhide(true)}
                    } } style={{backgroundColor:'#72789A',padding:5,borderRadius:100,}}><Ionicons name="eye" color={'black'} size={25} />
                  </TouchableOpacity>
                  <TextInput style={styles.inputTxt2} placeholder='password' onChangeText={password => setPassword(password)} defaultValue={password} secureTextEntry={showhide}/>
                </View>  
                <Button  title='Login' color={'#F19022'} onPress={() => {
                  startLoading();
                  AuthenticateDataApi(user,password).then((res) => {
                    console.log(res)                  
                    if (res == 200) {
                      navigation.navigate('Main',{iduser: res});
                      setUser('');
                      setPassword('');
                    }
                    else{
                      alert('Algunos campos no coinciden')
                    }
                  })
                }}/>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scroll_container: {
        backgroundColor: '#091353',
    },
    container: {
      flex: 1,
      marginTop:'40%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:'30%',
    },
    inputTxt: {
      padding: 5,
      marginTop: '30%',
      width:'100%',
      height:'18%',
      backgroundColor:'#72789A',
      borderRadius:10,
      textAlign:'center',
      fontSize:RFPercentage(2.5),
    },
    inputTxt2: {
      padding: 5,
      width:'90%',
      textAlign:'center',
      marginRight:5,
      fontSize:RFPercentage(2.5),
    },
    passwordview:{
      flexDirection: 'row',
      width:'80%',
      marginBottom:'8%',
      backgroundColor:'#72789A', 
      borderRadius:10,
      height:'8%',
    },
    checkview:{
      marginBottom:'20%',
      flexDirection: 'row',
    },
    textcheck:{
      fontSize:RFPercentage(2),
      color:'#FFF',
      padding:3,
      textAlignVertical:'center',
    },
  });



export default LoginScreen;