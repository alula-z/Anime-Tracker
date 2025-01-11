import Parse from "./parseConfig";
import { Alert } from "react-native";
import { View, Text, FlatList } from "react-native";

export const getAnimeFromApi = async () => {
  console.log("entered getAnimeFromApi method");
  let offset = 0;
  let finished = false;
    try {
      while (!finished) {
      console.log(`offset: ${offset} \n`);
      const response = await fetch(
        `https://api.myanimelist.net/v2/anime?q=one&limit=100&offset=${offset}`,
        {
          headers: { "X-MAL-CLIENT-ID": "d39184f4fb79d5681b4e4eb4ba31419d" },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      if (responseJson.data && Array.isArray(responseJson.data)) {
        await saveAnime(responseJson.data);
      }
      {offset > 200 ? finished = true : offset += 100  }}
      return responseJson;
    } catch (error) {
      console.error(error);
      return null;
  }
  
};

const saveAnime = async (animeList) => {
  console.log("entered save method");
  let savedCount = 0;
  try {
    const AnimeClass = Parse.Object.extend("Anime");
    for (const anime of animeList) {
      try {
        const query = new Parse.Query(AnimeClass);
        query.equalTo("title", anime.node.title);
        const existingAnime = await query.first();

        if (!existingAnime) {
          const animeObject = new AnimeClass();
          if (anime.node.title != null) {
            animeObject.set("anime_id", anime.node.id);
            animeObject.set("title", anime.node.title);
            animeObject.set("main_picture", anime.node.main_picture.medium);
            await animeObject.save();
            console.log("Saved anime:", anime.node.title, anime.node.id);
            savedCount++;
          } else {
            console.log("Null title");
          }
        } else {
          console.log("Anime already exists:", anime.node.title);
        }
      } catch (saveError) {
        console.error("Error saving anime:", anime.node.title, saveError);
      }
    }

    if (savedCount > 0) {
      Alert.alert("Success", `Saved ${savedCount} new anime entries`);
    } else {
      Alert.alert("Info", "No new anime entries to save");
    }
  } catch (error) {
    console.error("Error in save process:", error);
    Alert.alert("Error", "Failed to save anime data");
  }
};


export const getAnime = async (searchVal) => {
  console.log("entered getAnime");
  try {
    let query = new Parse.Query("Anime");
    query.contains("title", searchVal);

    let results = await query.find();

    for (let anime of results) {
      console.log(anime.get("title"));
    }
  } catch (error) {
    console.log("Error retrieving anime", error.message);
  }
};

export const getUser = async function(){
  try{
    const currentUser = await Parse.User.currentAsync();
    if(currentUser !== null){
      Alert.alert('Sucess', `${currentUser.get('username')} is the current user`);
    }
  return currentUser
  }catch(error){
    console.log("Error finding user", error.message);
    return null;
  }
}

