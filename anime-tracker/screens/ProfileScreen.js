import React, {useEffect,useState} from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { getUser } from "../App";

const movieThumbnail = require("../assets/Images/movieThumbnailHolder.jpeg");
const ProfileScreen = () => {
  const navigation = useNavigation();
  const[currentUser, setCurrentUser]= useState(null);

  useEffect(()=>{
    const fetchUser = async() =>{
      const user = await getUser();
      setCurrentUser(user);
    };
    fetchUser();
  },[]);
  if (currentUser === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text> 
      </View>
    );
  }
  return (
    <View>
      <ScrollView>
        <View>
          <ImageBackground
            source={require("../assets/Images/TestLogo.png")}
            style={styles.backgroundImg}
          >
            <View style={{ position: "absolute", right: 5, top: 2 }}>
              <Button
                title=""
                icon={<Icon name="settings" size={20} color="white" />}
                buttonStyle={styles.settingIcon}
                onPress = {() => navigation.navigate("SettingsScreen")}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.profileText}> Avatar placeholder</Text>
              <Text style={styles.profileText}> {currentUser.get('username')}</Text>
              <Text style={styles.profileText}>Experience Level</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bodyContainer}>
          <View style={StyleSheet.container}>
            {/*Stats section*/}
            <View style={styles.category}>
              <Text style={styles.categoryText}>Stats</Text>
              <Button
                title=""
                icon={<Icon name="arrow-forward-ios" size={14} color="white" />}
                buttonStyle={styles.forwardIcon}
                onPress = {() => navigation.navigate("Favorites")}
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* currently watching, completed, favorites, time Watched */}
              <View style={styles.container}>
                <View style={styles.stat}>
                  <Text style={styles.statCat}>Completed </Text>
                </View>
                <View style={styles.statNumBox}>
                  <Text style={styles.statNum}>00</Text>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.stat}>
                  <Text style={styles.statCat}>Favorites</Text>
                </View>
                <View style={styles.statNumBox}>
                  <Text style={styles.statNum}>00</Text>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.stat}>
                  <Text style={styles.statCat}>Time Watched</Text>
                </View>
                <View style={styles.statNumBox}>
                  <Text style={styles.statNum}>01Y 00M 00d</Text>
                </View>
              </View>
            </ScrollView>
            {/* Favorites Section */}
            <View style={styles.category}>
              <Text style={styles.categoryText}>Favorites</Text>
              <Button
                title=""
                icon={<Icon name="arrow-forward-ios" size={14} color="white" />}
                buttonStyle={styles.forwardIcon}
                onPress = {() => navigation.navigate("Favorites")}
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={StyleSheet.container}>
                <Image source={movieThumbnail} style={styles.FavoritesImg} />
                <View style={styles.statNumBox}>
                  <Text style={styles.FavoitesText}>Movie 1</Text>
                </View>
              </View>
              <View style={StyleSheet.container}>
                <Image source={movieThumbnail} style={styles.FavoritesImg} />
                <View style={styles.statNumBox}>
                  <Text style={styles.FavoitesText}>Movie 2</Text>
                </View>
              </View>
              <View style={StyleSheet.container}>
                <Image source={movieThumbnail} style={styles.FavoritesImg} />
                <View style={styles.statNumBox}>
                  <Text style={styles.FavoitesText}>Movie 3</Text>
                </View>
              </View>
            </ScrollView>
            {/* Watchlist Section */}
            <View style={styles.category}>
              <Text style={styles.categoryText}>Watchlist</Text>
              <Button
                title=""
                icon={<Icon name="arrow-forward-ios" size={14} color="white" />}
                buttonStyle={styles.forwardIcon}
                onPress = {() => navigation.navigate("Favorites")}
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={StyleSheet.container}>
                <Image source={movieThumbnail} style={styles.FavoritesImg} />
                <View style={styles.statNumBox}>
                  <Text style={styles.FavoitesText}>Movie 0</Text>
                </View>
              </View>
              <View style={StyleSheet.container}>
                <Image source={movieThumbnail} style={styles.FavoritesImg} />
                <View style={styles.statNumBox}>
                  <Text style={styles.FavoitesText}>Movie 2</Text>
                </View>
              </View>
              <View style={StyleSheet.container}>
                <Image source={movieThumbnail} style={styles.FavoritesImg} />
                <View style={styles.statNumBox}>
                  <Text style={styles.FavoitesText}>Movie 3</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    display: "flex",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
  },

  backgroundImg: {
    resizeMode: "cover",
    height: 150,
    opacity: 0.9,
    borderColor: "black",
  },
  category: {
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 8,
    height: 50,
    justifyContent: "space-between",
    alignItems:'center',
    flexDirection: 'row',
  },
  categoryText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  profileText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  stat: {
    borderColor: "black",
    borderWidth: 2,
    width: 150,
    height: 50,
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  statCat: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 3,
    paddingRight: 3,
  },
  statNum: {
    fontSize: 20,
    borderTopWidth: 0,
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
  bodyContainer: {
    marginLeft: 2,
    marginRight: 2,
  },
  FavoritesImg: {
    marginTop: 6,
    marginRight: 6,
    resizeMode: "cover",
    width: 150,
    height: 200,
    borderWidth: 2,
  },
  FavoitesText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  settingIcon: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  forwardIcon:{
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 20,
    marginRight: 5,
  }
});

export default ProfileScreen;
