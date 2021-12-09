//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { useState } from 'react';
import { ScrollView,StyleSheet, Text, View, Button, TextInput,TouchableOpacity, } from 'react-native';
//import icons(Importación de iconos para el drawer)
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';//import of picker element(Importación del picker como elemento)
import DatePicker from 'react-native-datepicker';//import of datepicker element(Importación del datepicker como elemento)
import { RFPercentage } from 'react-native-responsive-fontsize';//library to get responsive fonts(Librería para tener un tamaño responsivo en el texto)


function TransactionScreen({route, navigation}){
  const { itemId } = route.params;
  const { companie } = route.params;
  //params form other screen companie(parametros que vienen de la pantalla companie)
  const [ revenue, setRevenue ] = useState("");//first picker revenue(primer selector de ingresos)
  const [ revenuetype, setRevenuetype ] = useState("");//second picker revenue(segundo selector de ingresos)
  const [ expenses, setExpenses ] = useState("");//first picker expenses(primer selector de egresos)
  const [ expensestype, setExpensestype ] = useState("");//second picker expenses(segundo selector de egresos)
  const [ shouldShow, setShouldShow] = useState(false);// variable to show second picker(variable para mostrar segundo selector)
  const [revenuedate, setRevenueDate] = useState(new Date())//variable for date revenue(variable para la fecha de ingreso)
  const [revenueamount, onChangeRevenueAmount] = useState('');// variable for amount revenue(variable para la fecha de egreso)
  const [revenuedescription, onChangeRevenueDescription] = useState('');// variable for description revenue(variable para la descripción de ingreso)
  const [expensesdate, setExpensesDate] = useState(new Date())//variable for date expenses(variable para la descripción de engreso) 
  const [expensesamount, onChangeExpensesAmount] = useState('');//variable for amount expenses(variable para el de ingreso)
  const [expensesdescription, onChangeExpensesDescription] = useState('');//variable for description expenses(variable para el de ingreso)

    /*This window has two views with the function of get revenues and expenses with some pickers imported; those two view has 2 secondary views,
    the first secondary view is for the first picker which depends on its value shows the second one, the button shows a ticket with all the data
    (Esta ventana tiene dos vistas con la función de obtener ingresos y gastos con algunos recolectores importados; esas dos vistas tienen 2 vistas 
      secundarias,la primera vista secundaria es para el primer selector que depende de su valor muestra la segunda, el botón muestra un ticket 
      con todos los datos)*/
    return(
        <ScrollView style={styles.scroll_container}>

          <View style={styles.header}> 
            <Ionicons name="arrow-back-outline" size={30} color={'#fff'} onPress={navigation.goBack} />
          </View>
          <Text style={styles.txt}>Compañia: {JSON.stringify(companie)}</Text>
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
                  onValueChange={(revenue) => {
                    setRevenue(revenue)
                    if (revenue == "venta1") {
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
                      onValueChange={(revenuetype) => setRevenuetype(revenuetype)}
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
              <TextInput style={styles.inputTxt} keyboardType="numeric" onChangeText={revenueamount => onChangeRevenueAmount(revenueamount)} value={revenueamount}/>
              <Text style={styles.label} >Fecha</Text>
              <DatePicker date={revenuedate} onDateChange={setRevenueDate} />
              <Text style={styles.label} >Descripción</Text>
              <TextInput style={styles.inputTxt} multiline={true} onChangeText={revenuedescription => onChangeRevenueDescription(revenuedescription)} value={revenuedescription}/>
              <View style={styles.btn}><Button title="Guardar datos" onPress={()=>{
                ticket(companie, revenuedate, revenue, revenuetype, revenueamount, revenuedescription);
              }}/></View>
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
                  onValueChange={(expenses) => {
                    setExpenses(expenses)
                    if (expenses == "venta1") {
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
                      onValueChange={(expensestype) => setExpensestype(expensestype)}
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
              <TextInput style={styles.inputTxt} keyboardType="numeric" onChangeText={expensesamount => onChangeExpensesAmount(expensesamount)} value={expensesamount}/>
              <Text style={styles.label} >Fecha</Text>
              <DatePicker date={expensesdate} onDateChange={setExpensesDate} />
              <Text style={styles.label} >Descripción</Text>
              <TextInput style={styles.inputTxt} multiline={true} onChangeText={expensesdescription => onChangeExpensesDescription(expensesdescription)} value={expensesdescription}/>
              <View style={styles.btn}><Button title="Guardar datos" onPress={()=>{
                ticket(companie,expensesdate, expenses, expensestype, expensesamount, expensesdescription);
              }}/></View>
          </View>

        </ScrollView>
    );
}

//this function has all the validations and the structure of the ticket(Esta función tiene las validaciones y las estructuras del ticket)
function ticket(companie,date, transaction, transactiontype, amount,description) {

  if (date==""||transaction==null||amount==""||description=="") {
    alert("Debe completar todos los campos")
  }//validation of empty or null data(validación de datos vacios o nulos)
  else{
    if (transaction=="venta1") {
      if (transactiontype==null) {
        alert("Debe completar todos los campos")
      }
      else{
        alert(companie+"\n\n\n"+"Fecha de transacción:  "+date+"\n\nTransacción:  "+transaction+
        "\n\nTipo de transaccion  "+transactiontype+"\n\nMonto:  $"+amount+"\n\nDescripción:  "+description)
      }
    }
    else{
      alert(companie+"\n\n\n"+"Fecha de transacción:  "+date+"\n\nTransacción:  "+transaction+
      "\n\nMonto:  $"+amount+"\n\nDescripción:  "+description)
    }
  }
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