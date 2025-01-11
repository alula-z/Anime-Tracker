import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import { getAnime } from "../ApiService";
import Parse from "../parseConfig";
import { FlatList } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [DATA, setData] = useState([]);
  const searchAnime = async (searchVal) => {
    setData([]);
    console.log("entered searchAnime");
    try {
      let query = new Parse.Query("Anime");
      query.contains("title", searchVal);
      let results = await query.find();
      let fetchedData = results.map((anime) => ({
        title: anime.get("title"),
        main_picture: anime.get("main_picture"),
      }));
      setData(fetchedData);
      console.log(DATA.length);
      fetchedData.forEach((title) => console.log(title));
    } catch (error) {
      console.log("Error retrieving anime", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Search Anime Title"
          value={search}
          style={styles.searchBar}
          onChangeText={(text) => setSearch(text)}
        />
        <Button
          title=""
          icon={
            <Icon name="search" size={25} color="black" style={styles.icon} />
          }
          style={styles.button}
          onPress={() => searchAnime(search)}
        />
      </View>
      <FlatList
        style={styles.list}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
            <View style={StyleSheet.container}>
              <Image
                source={{ uri: item.main_picture }}
                style={styles.FavoritesImg}
              />
              <View style={styles.statNumBox}>
                <Text style={styles.FavoitesText}>{item.title}</Text>
              </View>
            </View>
        }
        ListEmptyComponent={
            <View>
            <Text style = {{paddingTop: 10, fontWeight:'bold'}}>No Anime found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  searchBar: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
    width: 330,
  },
  list: {
    width: "auto",
    marginTop: 10,
  },
  statNumBox: {
    borderColor: "black",
    borderWidth: 2,
    borderTopWidth: 0,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9,
  },
  FavoritesImg: {
    marginTop: 6,
    marginRight: 15,
    resizeMode: "cover",
    width: 150,
    height: 200,
    borderWidth: 2,
  },
  FavoitesText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    paddingLeft: 5,
  },
  icon: {},
  scrollView: {
    paddingTop: 20,
  },
});

export default SearchScreen;
