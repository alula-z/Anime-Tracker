import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
const HomeScreen = () =>{
    return (
        
    <View style = {{flex:1}}>
      <View style = {styles.header}>
        
        
      </View>
     
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        top: 35,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoImg:{
       width: 50,
       height: 50,
       resizeMode: 'contain',
       
      },
      left:{
        position: 'absolute',
        left:0,
      },
      right:{
        position: 'absolute',
        right:0,
      },
});

export default HomeScreen;
