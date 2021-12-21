//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { ScrollView ,StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity  } from 'react-native';
import { useState } from 'react';
//import icons(Importación de iconos)
import Ionicons from 'react-native-vector-icons/Ionicons';
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

//Login Screen with user's email and password(Pantalla de login con email y contraseñas de los usuarios)
function LoginScreen({navigation}){

  const [user, setUser] = useState('');//Variable for get the input user(variable para capturar el input de usuario)
  const [password, setPassword] = useState('');//Variable for get the input password(variable para capturar el input de contraseña)
  const [showhide, setShowhide] = useState(true);//Variable to protect the password(variable para mostrar y esconder la contraseña)

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
                <Button  title='Login' color={'#F19022'} onPress={() => {
                    if (authentication(user,password)) {
                      setUser('');
                      setPassword('');
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
    txt:{
      color:'#9FC73A',
      fontSize:RFPercentage(2.1),
      marginTop:15,
      marginBottom:30,
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
      marginBottom:'20%',
      backgroundColor:'#72789A', 
      borderRadius:10,
      height:'8%',
  },
  });



export default LoginScreen;