import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import 'react-native-get-random-values';
import Parse from './parseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export const getUser = async function(){
  try{
    const currentUser = await Parse.User.currentAsync();
    if(currentUser !== null){
      Alert.alert('Sucess', `${currentUser.get('username')} is the current user`);
    }
  return currentUser
  }catch(error){
    console.log("Error finding user", error.message);
    return null;
  }
}
export default function App() {
  useEffect(() => {
    const initializeInstallation = async () => {
      try {
        console.log('Current Platform:', Platform.OS);
        
        const installation = new Parse.Installation();
        installation.set('deviceType', Platform.OS);
        
        const savedInstallation = await installation.save();
        console.log('Installation saved successfully:', savedInstallation.id);
        
        await AsyncStorage.setItem('installationId', savedInstallation.id);
      } catch (error) {
        console.error('Installation error details:', error);
      }
    };

    initializeInstallation();
  }, []);
  return (
    <Navigator/>
  );
}


const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    bottom: 0,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  
});
