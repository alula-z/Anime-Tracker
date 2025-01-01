import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();
const Navigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen}/>
            <Tab.Screen name = "Search" component = {SearchScreen}/>
            <Tab.Screen name = "Favorites" component = {FavoritesScreen}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen}/>
            
        </Tab.Navigator>
    );
};

export default Navigator;