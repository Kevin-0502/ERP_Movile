//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView,StyleSheet, Text, View, Button, TextInput,TouchableOpacity, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'

function TransactionScreen({route, navigation}){
  const { itemId } = route.params;
  const { otherParam } = route.params;
  const [ ingreso, setIngreso ] = useState("");
  const [ tipoingreso, setTipoingreso ] = useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const [date, setDate] = useState(new Date())

    return(
        <ScrollView style={styles.scroll_container}>
          <View style={styles.container}>
            <Text>Compañia: {JSON.stringify(otherParam)}</Text>
              <Text style={styles.txt}>Ingresos</Text>
              <View style={styles.txtContainer}>
              <Text style={styles.label}>Seleccione el tipo de ingreso</Text>
              <RNPickerSelect
                placeholder={{
                  label: 'Seleccione el tipo de ingreso...',
                  value: null,
                  color:'#394263',
                }}
                onValueChange={(ingreso) => {
                  setIngreso(ingreso)
                  if (ingreso == "venta1") {
                    setShouldShow(true)
                  }
                  else{
                    setShouldShow(false)
                  }
                }}
                items={[
                    { label: 'Venta 1', value: 'venta1',},
                    { label: 'Venta 2', value: 'venta2',},
                    { label: 'Venta 3', value: 'venta3',},
                ]}
                style={styles.txtContainer}
                />
                {shouldShow ? (
                  <>
                  <Text style={styles.label}>Tipo</Text>
                  <RNPickerSelect
                    placeholder={{
                      label: 'Tipo de venta...',
                      value: null,
                      color: '#394263',
                    }}
                    onValueChange={(tipoingreso) => setTipoingreso(tipoingreso)}
                    items={[
                      { label: 'Venta 1', value: 'venta1' },
                      { label: 'Venta 2', value: 'venta2' },
                      { label: 'Venta 3', value: 'venta3' },
                    ]} 
                  />
                  </>
                ) : null}
              </View>
              <Text style={styles.label}>Monto</Text>
              <TextInput style={styles.inputTxt} placeholder="Monto" keyboardType="numeric" />
              <Text style={styles.label}>Fecha</Text>
              <DatePicker date={date} onDateChange={setDate} />
              <Text style={styles.label}>Descripción</Text>
              <TextInput style={styles.inputTxt} placeholder="Descripción" multiline={true} />
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
    label:{
      marginTop:10,
      padding:10,
      marginTop:10,
      color:'#394263',
      fontWeight:'bold',
    },
    txt:{
      fontSize:24,
      color:'#000',
      fontWeight:'bold',
      padding:10,
    },
    inputTxt: {
      padding: 0,
      marginBottom: 15,
      marginLeft: 15,
      marginRight: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      width:'50%',
    },
    txtContainer:{
      flex:1,
    },
  });

export default TransactionScreen;