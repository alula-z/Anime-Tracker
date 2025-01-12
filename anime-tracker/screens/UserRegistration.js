import React, { useState } from "react";
import { Text, Alert, Button, StyleSheet, TextInput, View } from "react-native";
import Parse from "parse/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const resetToHome = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  });
};

export const UserRegistration = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const passCheck = (password) =>{
    // password length 8 characters, include number, include capital
    let currentPassCheck = true;
    let errorMessage = "";
    if(password.length <8){
      errorMessage += 'Password length must be longer than 9 characters\n';
      currentPassCheck = false;
    }
    if(!password.match(/\d/)){
      errorMessage += 'Password must contain a number\n';
      currentPassCheck = false;
    }
    if(!password.match(/[A-Z]/)){
      errorMessage += 'Password must contain an Upper case\n'
      currentPassCheck = false;
    }
    Alert.alert(errorMessage);
    return currentPassCheck;
    
  }
  
  const doUserRegistration = async () => {
    const usernameVal = username.trim();
    const passwordVal = password;
    const secondPasswordVal = secondPassword;
    const emailVal = email;
    const firstNameVal = firstName;
    if (
      !usernameVal ||
      !passwordVal ||
      !secondPasswordVal ||
      !emailVal ||
      !firstNameVal
    ) {
      Alert.alert("Error", "All fields must be completed");
      return false;
    }
    if (passwordVal !== secondPasswordVal) {
      Alert.alert("Error", "Passwords do not match");
      return false;
    }
    if(!passCheck(passwordVal)){
      return false;
    }
    try {
      const user = new Parse.User();
      user.set("username", usernameVal);
      user.set("password", passwordVal);
      user.set("email", emailVal);
      user.set("firstName", firstNameVal);

      await user.signUp();

      await AsyncStorage.setItem("userSession", JSON.stringify({
        username: user.get("username"),
        email: user.get("email"),
        firstName: user.get("firstName"),
      }));
      Alert.alert(
        "Sucessful",
        `User ${user.get("username")} was succesfull`
      );
      resetToHome(navigation);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        autoCapitalize={"words"}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        autoCapitalize={"none"}
        textContentType={"email"}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        autoCapitalize={"none"}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        autoCapitalize={"none"}
        textContentType={"Password"}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.label}>Retype Password:</Text>
      <TextInput
        style={styles.input}
        value={secondPassword}
        autoCapitalize={"none"}
        textContentType={"Password"}
        placeholder={"Retype Password"}
        secureTextEntry
        onChangeText={(text) => setSecondPassword(text)}
      />

      <Button
        title={"Sign Up"}
        onPress={doUserRegistration}
        style = {styles.signUpButton}
      />
      <View style={styles.horizontal}>
        <Text style={styles.text}>Already Have an Account?</Text>
        <Button
          title="Log In Here"
          onPress={() => navigation.navigate('LogIn')}
          style={styles.logInButton}
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    top: 80,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  label: {
    fontWeight: "bold",
    paddingBottom: 5,
    width: "300",
    textAlign: "flex-start",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    marginBottom: 15,
    width: "300",
    height: "50",
    borderWidth: 2,
    padding: 3,
    marginLeft: 0,
  },
  signUpButton: {
    paddingBottom: 20,
  },
  horizontal: {
    flexDirection: "row",
  },
  logInButton: {
    
  },
  text: {
    textAlignVertical: "center",
    fontSize: 15,
    textAlign: "center",
    height: 50,
    width: "auto",
  },
});
