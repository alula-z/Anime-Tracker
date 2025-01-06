import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import Parse from "parse/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('hNgtOCSfbhpuybcCuwh0leupDhnlsCmyH3RyOamJ','j9em3csKeztaQwmXu6b8AMDmDx3ExgeGhuLj5wPX');
Parse.serverURL = 'https://parseapi.back4app.com/parse';

const resetToHome = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{name :'Home'}],
  });
};
export const UserRegistration = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const doUserRegistration = async () =>{
    
    const usernameVal = username.trim();
    const passwordVal = password;
    const secondPasswordVal= secondPassword;
    const emailVal = email;
    const firstNameVal = firstName;
    const lastNameVal = lastName;

    if(!usernameVal || !passwordVal || !secondPasswordVal || !emailVal || !firstNameVal || !lastNameVal){
      Alert.alert("Error", "All fields must be completed");
      return false;
    }
    if(passwordVal === secondPasswordVal){
      Alert.alert("Error", "Passwords do not match")
    }
    try{
    const createdUser =  await Parse.User.signUp(usernameVal,passwordVal,firstNameVal, lastNameVal, emailVal, );
        Alert.alert(
            "Sucessful",
            'User ${createdUser.get("username")} was succesfull'
        );
        resetToHome(navigation);
    } catch(error) {
        Alert.alert("Error", error.message);
        
    }
  };
  return (
    <View style = {styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        autoCapitalize={"none"}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        value={password}
        autoCapitalize={"none"}
        textContentType={"Password"}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
       <TextInput
        style={styles.input}
        value={secondPassword}
        autoCapitalize={"none"}
        textContentType={"Password"}
        placeholder={"Retype Password"}
        secureTextEntry
        onChangeText={(text) => setSecondPassword(text)}
      />

      <TextInput
      style = {styles.input}
      value = {email}
      autoCapitalize={"none"}
      textContentType={"email"}
      placeholder="email"
      onChangeText = {(text) => setEmail(text)}/>

      <TextInput
      style = {styles.input}
      value = {firstName}
      autoCapitalize={"words"}
      placeholder="first Name"
      onChangeText = {(text) => setFirstName(text)}/>

      <TextInput
      style = {styles.input}
      value = {lastName}
      autoCapitalize={"words"}
      placeholder="Last Name"
      onChangeText = {(text) => setLastName(text)}/>

      <Button  title = {"Sign Up"} onPress={ doUserRegistration}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    height: '35',
    marginBottom: 10,
    width: '300',
    height: '40',
    borderWidth: 2,
    padding: 3,
  },
  signUpButton:{
    backgroundColor: 'red',
  },

});
