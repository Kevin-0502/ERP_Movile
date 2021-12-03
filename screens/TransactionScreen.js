//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView,StyleSheet, Text, View, Button, TextInput,TouchableOpacity, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

function TransactionScreen({route, navigation}){
  const { itemId } = route.params;
  const { otherParam } = route.params;
  const [ ingreso, setIngreso ] = useState("");
  const [ tipoingreso, setTipoingreso ] = useState("");
  const [ egreso, setEgreso ] = useState("");
  const [ tipoegreso, setTipoegreso ] = useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const [date, setDate] = useState(new Date())

    return(
        <ScrollView style={styles.scroll_container}>
          <View style={styles.header}> 
            <Ionicons name="arrow-back-outline" size={30} color={'#fff'} onPress={navigation.goBack} />
          </View>
          <Text style={styles.txt}>Compañia: {JSON.stringify(otherParam)}</Text>
          <View style={styles.container}>
              <Text style={styles.txt}>Ingresos</Text>
              <View style={styles.txtContainer}>
                <Text style={styles.label} >Tipo de ingreso</Text>
                <RNPickerSelect
                  style={{ inputAndroid: { color: 'black' } }}
                  placeholder={{
                    label: 'Seleccione el tipo de ingreso...',
                    value: null,
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
                  />
                  {shouldShow ? (
                    <>
                    <Text style={styles.label}>Tipo</Text>
                    <RNPickerSelect
                      style={{ inputAndroid: { color: 'black' } }}
                      placeholder={{
                        label: 'Tipo de venta...',
                        value: null,
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
              <Text style={styles.label} >Monto</Text>
              <TextInput style={styles.inputTxt} placeholder="Monto" keyboardType="numeric" />
              <Text style={styles.label} >Fecha</Text>
              <DatePicker date={date} onDateChange={setDate} />
              <Text style={styles.label} >Descripción</Text>
              <TextInput style={styles.inputTxt} placeholder="Descripción" multiline={true} />
              <View style={styles.btn}><Button  onPress={()=>{alert('Datos guardados')}} title="Guardar datos"/></View>
          </View>



          <View style={styles.container}>
              <Text style={styles.txt}>Egresos</Text>
              <View style={styles.txtContainer}>
                <Text style={styles.label} >Tipo de egreso</Text>
                <RNPickerSelect
                  style={{ 
                    inputAndroid: { color: 'black' } 
                  }}
                  placeholder={{
                    label: 'Seleccione el tipo de egreso...',
                    value: null,
                  }}
                  onValueChange={(egreso) => {
                    setEgreso(egreso)
                    if (egreso == "venta1") {
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
                  />
                  {shouldShow ? (
                    <>
                    <Text style={styles.label}>Tipo</Text>
                    <RNPickerSelect
                    style={{ inputAndroid: { color: 'black' } }}
                      placeholder={{
                        label: 'Tipo de pago...',
                        value: null,
                      }}
                      onValueChange={(tipoegreso) => setTipoegreso(tipoegreso)}
                      items={[
                        { label: 'Venta 1', value: 'venta1' },
                        { label: 'Venta 2', value: 'venta2' },
                        { label: 'Venta 3', value: 'venta3' },
                      ]} 
                  />
                  </>
                  ) : null}
              </View>
              <Text style={styles.label} >Monto</Text>
              <TextInput style={styles.inputTxt} placeholder="Monto" keyboardType="numeric" />
              <Text style={styles.label} >Fecha</Text>
              <DatePicker date={date} onDateChange={setDate} />
              <Text style={styles.label} >Descripción</Text>
              <TextInput style={styles.inputTxt} placeholder="Descripción" multiline={true} />
              <View style={styles.btn}><Button  onPress={()=>{alert('Datos guardados')}} title="Guardar datos"/></View>
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll_container: {
      backgroundColor: '#fff',
      textAlign:'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin:20,
      borderRadius:15,
      borderWidth:10,
      borderColor:'lightblue',
    },
    header:{
      flex: 1,
      backgroundColor:'#394263',
      padding:10,
    },
    label:{
      marginTop:10,
      padding:10,
      marginTop:10,
      color:'#394263',
      fontWeight:'bold',
      fontSize: RFPercentage(3),
    },
    txt:{
      fontSize: RFPercentage(4),
      color:'#000',
      fontWeight:'bold',
      padding:10,
      textAlign: 'center',
    },
    inputTxt: {
      padding: 0,
      marginBottom: 15,
      marginLeft: 15,
      marginRight: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      width:'50%',
      height:30,
      fontSize: RFPercentage(3),
    },
    txtContainer:{
      flex:1,
    },
    btn:{
      margin:10,

    },
  });

export default TransactionScreen;