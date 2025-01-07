import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import { UserRegistration } from './screens/UserRegistration';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-get-random-values';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  "EhVhx3OQ5gPUZ4Y43ds0BWOyavt5ydPfDsMKEWde",
  "ZXYpYxwgh12kfIqTthyIpUVWqTdN7Cq3404OkTfT"
);
Parse.serverURL = "https://parseapi.back4app.com/parse";
export default function App() {
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
