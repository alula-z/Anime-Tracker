import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


const DetailsScreen = () =>{
    return (
        <View style = {StyleSheet.container}>
            <Text>Details Screen</Text>
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
export default DetailsScreen;