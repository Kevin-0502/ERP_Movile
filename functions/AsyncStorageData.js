import AsyncStorage from '@react-native-async-storage/async-storage';

 async function  usersdata() {

    let object
      try {
        const keys = await AsyncStorage.getAllKeys()
        const itemsArray = await AsyncStorage.multiGet(keys)
        object = {}
        itemsArray.map(item => {
          object[`${item[0]}`] = item[1]
        })
        
    }   catch (error) {
        console.log(error, 'error')
    }
    return object;
}

export default usersdata;

