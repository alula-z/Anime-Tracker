
import Parse from "./parseConfig";
import {  Alert } from 'react-native';

export const getAnimeFromApi = async () => {
  console.log("entered getAnimeFromApi method");
  try {
    const response = await fetch(
      "https://api.myanimelist.net/v2/anime?q=one&limit=100",
      {
        headers: { "X-MAL-CLIENT-ID": "d39184f4fb79d5681b4e4eb4ba31419d" },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseJson = await response.json();
    console.log("Fetched Data from API:", responseJson);
    console.log(".data", responseJson.data);
    if (responseJson.data && Array.isArray(responseJson.data)) {
      await saveAnime(responseJson.data);
    }
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
    for(const anime of animeList){
        try {
            const query = new Parse.Query(AnimeClass);
            query.equalTo('title', anime.node.title);
            const existingAnime = await query.first();
            
            if (!existingAnime) {
              const animeObject = new AnimeClass();
              console.log(anime.node.id);
              animeObject.set('id', anime.node.id);
              animeObject.set('title', anime.node.title);
              animeObject.set('main_picture', anime.node.main_picture.medium);
              console.log(anime.node.synopsis);
              await animeObject.save();
              console.log('Saved anime:', anime.node.title, anime.node.id);
              savedCount++;
            } else {
                const animeObject = new AnimeClass();
                animeObject.set('id', anime.node.id);
                await animeObject.save();
              console.log('Anime already exists:', anime.node.title);
            }
          } catch (saveError) {
            console.error('Error saving anime:', anime.node.title, saveError);
          }
    }
    
    if (savedCount > 0) {
        Alert.alert('Success', `Saved ${savedCount} new anime entries`);
      } else {
        Alert.alert('Info', 'No new anime entries to save');
      }
    } catch (error) {
      console.error("Error in save process:", error);
      Alert.alert('Error', 'Failed to save anime data');
    }
};

const saveAnimeDetails = async (animeList) => {
    console.log("entered save method");
    let savedCount = 0;
    try {
      const AnimeClass = Parse.Object.extend("Anime");
      for(const anime of animeList){
          try {
              const query = new Parse.Query(AnimeClass);
              query.equalTo('title', anime.node.title);
              const existingAnime = await query.first();
              
              if (!existingAnime) {
                const animeObject = new AnimeClass();
                animeObject.set('japaneseTitle', anime.alternative_titles.synonyms.ja);
                animeObject.set('synopsis', anime.synopsis);
                animeObject.set('id', anime.node.id);
                await animeObject.save();
                console.log('Saved anime Details:', anime.anime.alternative_titles.synonyms.ja);
                savedCount++;
              } else {
                console.log('Anime already exists:', anime.anime.alternative_titles.synonyms.ja);
              }
            } catch (saveError) {
              console.error('Error saving anime:', anime.anime.alternative_titles.synonyms.ja, saveError);
            }
      }
      
      if (savedCount > 0) {
          Alert.alert('Success', `Saved ${savedCount} new anime entries`);
        } else {
          Alert.alert('Info', 'No new anime entries to save');
        }
      } catch (error) {
        console.error("Error in save process:", error);
        Alert.alert('Error', 'Failed to save anime data');
      }
  };
