import React, { useEffect,useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import {UserRegistration}  from '../screens/UserRegistration';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Parse from "parse/react-native";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProfileStackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "ProfileScreen"
            component = {ProfileScreen}
            options = {{ title: "Profile"}}/>
            <Stack.Screen
            name = "SettingsScreen"
            component = {SettingsScreen}
            options = {{title: 'Settings'}}/>
        </Stack.Navigator>
    )
}


const MainNav = () =>{
    return(
        <Tab.Navigator
            screenOptions = {({route}) => ({
                tabBarIcon: ({ color,size}) =>{
                    let iconName;

                    if(route.name === "Home"){
                        iconName = "home"
                    }else if(route.name === "Search"){
                        iconName = "search"
                    }else if(route.name === "Favorites"){
                        iconName = "favorite"
                    }else if(route.name === "Profile"){
                        iconName = "person"
                    }
                    return <Icon name = {iconName} size = {size} color = {color}/>;
                
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
            })}>
            <Tab.Screen name = "Home" component = {HomeScreen} />
            <Tab.Screen name = "Search" component = {SearchScreen}/>
            <Tab.Screen name = "Favorites" component = {FavoritesScreen}/>
            <Tab.Screen name = "Profile" component = {ProfileStackNavigator} 
                options ={{headerShown : false}}/>
            
        </Tab.Navigator>
    );

}
function AuthStackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'SignUp' component ={UserRegistration} options = {{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default function Navigator(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkCurrentUser = async() => {
        const currentUser = await Parse.User.currentAsync();
        setIsAuthenticated(!!currentUser);
    }; 
    checkCurrentUser();
}, []);

 
    return(
        <NavigationContainer>
            {isAuthenticated ? <MainNav /> : <AuthStackNavigator/>}
        </NavigationContainer>
    );
}