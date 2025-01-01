import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';


export default function App() {
  return (
    <NavigationContainer>
    <View style = {{flex:1}}>
      <Navigator/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    bottom: 0,
  },
  
});
