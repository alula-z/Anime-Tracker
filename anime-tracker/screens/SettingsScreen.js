import React from "react";
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

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import Parse from "parse/react-native";
const SettingsScreen = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await Parse.User.logOut();
      navigation.reset({
        index: 0,
        routes: [{ name: "SignUp" }],
      });
    } catch (error) {
      console.error("error during logout: ", error.message);
    }
  };
  return (
    <View>
      <Button title="log out" onPress={handleLogout} />
    </View>
  );
};

export default SettingsScreen;
