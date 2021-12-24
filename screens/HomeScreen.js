//import elements(Importación de elementos básicos de react-native)
import React, {Component} from 'react';
import { ScrollView ,StyleSheet, Text, View, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

class HomeScreen extends Component{

    constructor() {
        super();
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({item}) => {
        return (<View>
            <Text>
                {item.email}
            </Text>
        </View>)
    }

    componentDidMount() {
        const url = 'http://hyderp.herokuapp.com/api/users?api_key=key_cur_prod_ftPqyBiQEf7Vcb9wKwbCf65c378VGyBB'
        fetch(url).then((response) => response.json()).then((responseJson) => {
            let dataSource = [];
    
            Object.values(responseJson).forEach(item => {
                dataSource = dataSource.concat(item);
            });
    
            this.setState({dataSource: dataSource})
        });
    }

    render(){
        return(
                <View style={styles.container}>   
                    <Text style={styles.txt}>Usuarios</Text>             
                    <FlatList
                    data = {this.state.dataSource}
                    renderItem = {this.renderItem}
                    keyExtractor = {(item, index) => index}
                    ItemSeparatorComponent = {this.renderSeparator} />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      paddingTop:'20%',
    },
    txt:{
        margin:30,
        fontSize:RFPercentage(5),
    },
  });

export default HomeScreen;