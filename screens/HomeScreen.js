//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { ScrollView ,StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({navigation}){
    return(
        <ScrollView style={styles.scroll_container}>
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
  });

export default HomeScreen;