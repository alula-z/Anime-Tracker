import React from "react";
import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


const ProfileScreen = () =>{
    return (
        <View>
        <View >
        <ImageBackground
                source = {require('../assets/Images/TestLogo.png')}
                style = {styles.backgroundImg }>
            <View style = {styles.container}>
            <Text style = {styles.profileText}> Avatar placeholder</Text>
            <Text style = {styles.profileText}> Username</Text>
            <Text style = {styles.profileText}>Experience Level</Text>
            </View>
        </ImageBackground>
        </View>
        <View style = {StyleSheet.container}>

            <Text> Profile</Text>
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
  
    backgroundImg:{
        resizeMode: 'cover',
        height: 150,
        opacity: 0.9,
    },
    profileText:{
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});

export default ProfileScreen;