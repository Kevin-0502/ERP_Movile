//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { ScrollView,StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailClientsScreen({navigation}){
    return(
        <ScrollView style={styles.scroll_container}>
          <View style={styles.header}> 
            <Ionicons name="arrow-back-outline" size={30} color={'#fff'} onPress={navigation.goBack} />
          </View>
          <View style={styles.container}>
            <Text>HOLA</Text>
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
    },
    header:{
      flex: 1,
      backgroundColor:'#9FC73A',
      padding:10,
    },
  });

export default DetailClientsScreen;