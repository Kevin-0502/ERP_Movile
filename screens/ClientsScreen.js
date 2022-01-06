//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { ScrollView,StyleSheet, Text, View, Button } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';//library to get responsive fonts(Librería para tener un tamaño responsivo en el texto)

//array to show in screen(vector para mostrarlo en pantalla)
const client = [
  {
    name: 'Amy Farha',
    companie: 'HYD Global Consulting'
  },
  {
    name: 'Chris Jackson',
    companie: 'Your Bussnises Center'
  },
  {
    name: 'Michael King',
    companie: 'SHH Corporation'
  },
  {
    name: 'Gary Mitchell',
    companie: 'General Enterprises'
  },
  {
    name: 'Ben Tennyson',
    companie: 'Omnitrix Corporation'
  },
]

//View that has a List showing all data from array "client"(Vista que contiene una lista donde se muestra la info del vector "client")
function ClientsScreen({navigation}){
    return(
    <View>

    
        <ScrollView style={styles.scroll_container}>
            <View>
            {
              client.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Detalles del cliente",{itemId: i, client: l.name, companie: l.companie,})}>
                  <Avatar source={require('../assets/Logo_HYD.jpg')} rounded size="large" />
                  <ListItem.Content>
                    <ListItem.Title style={styles.txtItem}>{l.name}</ListItem.Title>
                    <ListItem.Subtitle style={styles.txtsubItem}>{l.companie}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
            </View>
        </ScrollView>
        </View>
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
    txtItem: {
      fontSize: RFPercentage(3.5),
    },
    txtsubItem: {
      fontSize: RFPercentage(2),
    },
  });

export default ClientsScreen;