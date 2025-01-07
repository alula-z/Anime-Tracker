import React, {useState} from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import {getAnimeFromApi} from '../ApiService';

const SettingsScreen = ({setIsAuthenticated}) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    try {
      await Parse.User.logOut();
      await AsyncStorage.removeItem("userSession");
      setIsAuthenticated(false);
      navigation.dispatch(
        StackActions.popToTop()
      );
    } catch (error) {
      console.error("error during logout: ", error.message);
    }
  };
const handleFetch = async () =>{
  setLoading(true)
  const anime = await getAnimeFromApi();
  if(anime){
    setData(anime.data || []);
  }
  setLoading(false);
}
  return (
    <View>
      <Button title="log out" onPress={handleLogout} />
      <Button title = "fetch" onPress = {handleFetch}/>
    </View>
  );
};

export default SettingsScreen;
