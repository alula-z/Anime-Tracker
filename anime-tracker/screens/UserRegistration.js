import React, { FC, ReactElement, useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import Parse from "parse/react-native";


export const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const doUserRegistration = async function(){
    try{
    const usernameVal = username.trim();
    const passwordVal = password;

    const createdUser =  await Parse.User.signUp(usernameVal,passwordVal)
        Alert.alert(
            "Sucessful",
            'User ${createdUser.get("username")} was succesfull'
        );
    } catch(error) {
        Alert.alert("Error", error.message);
        
    }
  };
  return (
    <>
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

      <Button  title = {"Sign Up"} onPress={() => doUserRegistration()}/>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#efefef',
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
