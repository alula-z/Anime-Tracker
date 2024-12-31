import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


const FavoritesScreen = () =>{
    return (
        <View style = {StyleSheet.container}>
            <Text>Favorites Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoritesScreen;