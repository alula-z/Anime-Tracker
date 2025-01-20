import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import backgroundImage from "../assets/Images/movieThumbnailHolder.jpeg";

const showAnime = () =>{
    return (
        <View>
            <Text> Show Anime</Text>
            <Image source={backgroundImage} style = {styles.image}/>
        </View>
    );
};

export default showAnime;

const styles = new StyleSheet.create({
    image:{
        width: 120,
        height: 180,
    },

})

