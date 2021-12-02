//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { ScrollView,StyleSheet, Text, View, Button } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';

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
]

//View that has a List showing all data from array "client"(Vista que contiene una lista donde se muestra la info del vector "client")
function ClientsScreen({navigation}){
    return(
        <ScrollView style={styles.scroll_container}>
            <View>
            {
              client.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Detalles del cliente")}>
                  <Avatar source={require('../assets/Logo_HYD.jpg')} rounded  size="large"/>
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.companie}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
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
  });

export default ClientsScreen;