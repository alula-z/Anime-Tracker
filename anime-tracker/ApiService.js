import React, { useEffect, } from "react";
import Parse from "parse";
const  getAnimeFromApi = async () =>{
    try {
        const response = await fetch('https://api.myanimelist.net/v2/anime', {
            headers: {'X-MAL-CLIENT-ID' : 'd39184f4fb79d5681b4e4eb4ba31419d',},
        });
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseJson = await response.json();
        console.log("Fetched Data from API:", responseJson);
        await save(responseJson.data);
        return responseJson;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const save = async (animeList)=>{
    try{
        for(const anime of animeList){
            const AnimeClass = Parse.Object.extend("Anime");
            const animeObject = new AnimeClass();

            animeObject.set("title", anime.title);
            animeObject.set("synopsis", anime.synopsis);
            animeObject.set("rating", anime.mean);

            await animeObject.save();
            
        }
    }catch(error){
        console.error("Error saving", error);
    }
}
