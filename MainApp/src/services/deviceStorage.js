import { AsyncStorage } from 'react-native';

const deviceStorage = {

  async saveToken(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async loadToken(key='userToken') {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async deleteToken() {
    try{
      await AsyncStorage.removeItem('userToken')
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};

export default deviceStorage;
