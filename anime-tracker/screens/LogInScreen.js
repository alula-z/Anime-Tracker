import React, { useState } from "react";
import { Text, Alert, Button, StyleSheet, TextInput, View } from "react-native";
import Parse from "parse/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LogInScreen = ({ navigation,setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doLogIn = async () => {
    const usernameVal = username.trim();
    const passwordVal = password;
    try {
      const currentUser = await Parse.User.logIn(usernameVal, passwordVal);
      await AsyncStorage.setItem("userSession", JSON.stringify(currentUser));
      setIsAuthenticated(true);
      navigation.reset({
        index: 0,
        routes: [{ name: "MainNav" }],
      });
      
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.label}> Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        autoCapitalize={"none"}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}> Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        autoCapitalize={"none"}
        textContentType={"Password"}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Log In" onPress={doLogIn} style={styles.logInButton} />
      <Button
        title={"Sign Up"}
        onPress={() =>navigation.navigate("SignUp")}
        style={styles.signUpButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    top: 200,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  signUpButton: {
    paddingBottom: 20,
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
  label: {
    fontWeight: "bold",
    paddingBottom: 5,
    width: "300",
    textAlign: "flex-start",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
