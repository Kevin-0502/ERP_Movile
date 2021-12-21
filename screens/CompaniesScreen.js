import * as React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image,TouchableOpacity} from 'react-native'

const companiesList = [
  {
    key: '1',
    companie: 'HYD Global Consulting'
  },
  {
    key: '2',
    companie: 'Your Bussnises Center'
  },
  {
    key: '3',
    companie: 'SHH Corporation'
  },
  {
    key: '4',
    companie: 'Lo que el agua se llevó'
  },
]

function CompaniesScreen({ navigation }){
    return(
      <View>
        <ScrollView style={styles.scroll_container}>
          <View style={styles.container}>
            <ScrollView style={styles.horizontal_scroll_container} >
              {
                companiesList.map((l, i) => (
                  <View key={i} style={styles.itemView}>
                    <Text style={styles.items} >{l.companie}</Text>
                    <TouchableOpacity onPress={()=> {navigation.navigate("Ingresos y Egresos",{itemId: i, companie: l.companie,});}}>
                      <Image source={require('../assets/Logo_HYD.jpg')} />
                    </TouchableOpacity>
                  </View>
                ))
              }
            </ScrollView>
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
    horizontal_scroll_container: {
      backgroundColor: '#fff',
     },
     itemView:{
      alignItems: 'center',
      margin: 5,
      backgroundColor:'#fff',
      padding: 10,
      borderRadius: 15,
    },
    items:{
      fontWeight: 'bold',
      fontSize:30,
    },
  });

export default CompaniesScreen;