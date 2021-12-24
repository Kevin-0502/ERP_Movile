//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { Component } from 'react';
import { ScrollView ,StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, CheckBox,  } from 'react-native';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';//import icons(Importación de iconos)
import { RFPercentage } from 'react-native-responsive-fontsize';//library to get responsive fonts(Librería para tener un tamaño responsivo en el texto)
//users and passwords(usuarios y contraseñas)
const usersList = [
  {
    key: '1',
    user: 'admin@gmail.com',
    password:'admin123'
  },
  {
    key: '2',
    user: 'kevin@gmail.com',
    password:'kevin123'
  },
]

const getUsersApi = async () => {
  try {
    const response = await fetch('http://hyderp.herokuapp.com/api/users?api_key=key_cur_prod_ftPqyBiQEf7Vcb9wKwbCf65c378VGyBB');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};

//Login Screen with user's email and password(Pantalla de login con email y contraseñas de los usuarios)
function LoginScreen({navigation}) {

  const [user, setUser] = useState('');//Variable for get the input user(variable para capturar el input de usuario)
  const [password, setPassword] = useState('');//Variable for get the input password(variable para capturar el input de contraseña)
  const [showhide, setShowhide] = useState(true);//Variable to protect the password(variable para mostrar y esconder la contraseña)
  const [checked, setChecked] = useState(false);

  return(
        <ScrollView style={styles.scroll_container}>
            <View style={styles.container}>                
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
                <View style={styles.checkview}>
                {/*<Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                    uncheckedColor='white'
                  />
                  <Text style={styles.textcheck}>Recordar usuario</Text>*/}
                </View>
                <Button  title='Login' color={'#F19022'} onPress={() => {
                      getUsersApi();
                    if (authentication(user,password)) {
                      setPassword('');
                      if(!checked)
                      {
                        setUser('');
                      }
                      navigation.navigate('Main');
                    }
                    else{
                      alert('Error algunos campos no coinciden')
                    }
                 }}/>
                 
            </View>
        </ScrollView>
    );
}

//validation function for the user and the password(validación de usuarios y contraseñas para los usuarios)
function authentication(user, password) {
  
  var authenticated = false;

    usersList.map((u,i)=>{
      if (user == u.user){
        if(password == u.password){
          authenticated = true;
        }
      }
    });

    return authenticated;
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