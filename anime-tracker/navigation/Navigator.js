import React, { useEffect, useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import { UserRegistration } from "../screens/UserRegistration";
import SearchScreen from "../screens/SearchScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import Parse from "parse/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { LogInScreen } from "../screens/LogInScreen";
import showAnime from "../screens/showAnime";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function AppNavigator({isAuthenticated, setIsAuthenticated}) {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <RootStack.Screen name="MainNav">
          {(props) => <MainNav {...props} setIsAuthenticated={setIsAuthenticated} />}
        </RootStack.Screen>
      ) : (
        <RootStack.Screen name="AuthStack">
          {(props) => <AuthStackNavigator {...props} setIsAuthenticated={setIsAuthenticated} />}
        </RootStack.Screen>
      )}
    </RootStack.Navigator>
  );
}
function ProfileStackNavigator({ setIsAuthenticated}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="SettingsScreen"
        options={{ title: "Settings" }}
      >
        {(props) => (
          <SettingsScreen {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const MainNav = ({ setIsAuthenticated }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Favorites") {
            iconName = "favorite";
          } else if (route.name === "Profile") {
            iconName = "person";
          }else if(route.name === "Show"){
            iconName = "search";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name = "Show" component={showAnime}/>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
      >
        {(props) => (
          <ProfileStackNavigator
            {...props}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
function AuthStackNavigator({setIsAuthenticated}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={UserRegistration}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogIn" options={{ headerShown: false }}>
        {(props) => (
          <LogInScreen {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function Navigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkCurrentUser = async () => {
      const currentUser = await Parse.User.currentAsync();
      setIsAuthenticated(!!currentUser);
    };
    checkCurrentUser();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </NavigationContainer>
  );
}
