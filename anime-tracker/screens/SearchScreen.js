import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, {useState} from "react";
import { getAnime } from '../ApiService';
import Parse from "../parseConfig";
import { FlatList } from 'react-native-gesture-handler';

const SearchScreen = () =>{
    const [search,setSearch] = useState("");
    const [DATA, setData] = useState([]);
    const searchAnime = async(searchVal) =>{
        setData([]);
        console.log('entered searchAnime');
        try{
            let query = new Parse.Query("Anime");
            query.contains('title', searchVal);

            let results = await query.find();

            let fetchedData = results.map(anime => anime.get("title"));
        setData(fetchedData);
        fetchedData.forEach(title => console.log(title));
            
        }catch(error){
            console.log("Error retrieving anime", error.message);
        }
    
    };
    return (
        <View style = {styles.container}>
            <View style = {{flexDirection: 'row'}}>
            <TextInput
            placeholder = "Search Anime Title"
            value = {search}
            style = {styles.searchBar}
            onChangeText={(text) => setSearch(text)}/>
           <Button
                title=""
                icon={<Icon name="search" size={25} color="black" style = {styles.icon}  />}
                style = {styles.button}
                onPress = {() =>searchAnime(search)}
            />
            </View>
                <FlatList
                data = {DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Text>{item}</Text>}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
    },
    searchBar:{
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15,
        width: 330,

    },
    button:{
        paddingLeft: 5,
    },
    icon:{
        
    },
    scrollView:{
        paddingTop: 20,
        
    },

    
});

export default SearchScreen;