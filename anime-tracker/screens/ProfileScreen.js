import React from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View>
      <View>
        <ImageBackground
          source={require("../assets/Images/TestLogo.png")}
          style={styles.backgroundImg}
        >
          <View style={styles.container}>
            <Text style={styles.profileText}> Avatar placeholder</Text>
            <Text style={styles.profileText}> Username</Text>
            <Text style={styles.profileText}>Experience Level</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={StyleSheet.container}>
        {/*Stats section*/}
        <View style={styles.category}>
          <Text style={styles.categoryText}>Stats</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false}>
          {/* currently watching, completed, favorites, time Watched */}
          <View style={styles.container}>
            <View style={styles.stat}>
              <Text style={styles.statCat}>Completed </Text>
            </View>
            <View style = {styles.statNumBox}>
            <Text style={styles.statNum}>00</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.stat}>
              <Text style={styles.statCat}>Favorites</Text>
            </View>
            <View style = {styles.statNumBox}>
                <Text style={styles.statNum}>00</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.stat}>
              <Text style={styles.statCat}>Time Watched</Text>
            </View>
            <View style = {styles.statNumBox}>
              <Text style={styles.statNum}>01Y 00M 00d</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  profileText: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  stat: {
    borderColor: "black",
    borderWidth: 2,
    width: 150,
    height: 50,
    marginTop: 10,
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
  }
});

export default ProfileScreen;
