import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import React from "react";
const search = ""
const SearchScreen = () =>{
    return (
        <View style = {StyleSheet.container}>
            <SearchBar
            placeholder = "Search Anime Title"
            value = {search}
            style = {styles.searchBar}
            round 
            lightTheme
            inputContainerStyle= {styles.innerContainerStyle}
            containerStyle = {styles.containerStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar:{
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15,
    },
    innerContainerStyle:{
        backgroundColor: 'black',
        padding: 4,
    },
    containerStyle:{
        backgroundColor: 'transparent',
        padding: 0,
        paddingRight: 7,
        paddingTop: 5,
        paddingLeft: 7,
    }
});

export default SearchScreen;