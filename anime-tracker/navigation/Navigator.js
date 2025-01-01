import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
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
const Navigator = () =>{
    return(
        <Tab.Navigator
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color,size}) =>{
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
                tabBarInactiveColor: "gray",
            })}>
            <Tab.Screen name = "Home" component = {HomeScreen} />
            <Tab.Screen name = "Search" component = {SearchScreen}/>
            <Tab.Screen name = "Favorites" component = {FavoritesScreen}/>
            <Tab.Screen name = "Profile" component = {ProfileStackNavigator} 
                options ={{headerShown : false}}/>
            
        </Tab.Navigator>
    );
};

export default Navigator;