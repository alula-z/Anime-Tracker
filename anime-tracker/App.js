import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';


export default function App() {
  return (
    <NavigationContainer>
    <View style = {styles.navBar}>
      <Navigator/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    bottom: 0,
    
  },
  
});
