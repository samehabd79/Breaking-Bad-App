// step 1 - import LIBS
import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


// step 2 - import All Screens

// character - screens
import characterScreen ,{screenOptions as characterScreenOptions}from '../screens/character/character';
import overviewScreen ,{screenOptions as overviewScreenOptions}from '../screens/character/overview';

//episodes - screens
import episodesScreen ,{screenOptions as episodesScreenOptions}from '../screens/episodes/episodes';
import episodesCharacterScreen ,{screenOptions as episodesCharacterScreenOptions}from '../screens/episodes/episodesCharacter';

//quotes - screens
import quotesScreen ,{screenOptions as quotesScreenOptions}from '../screens/quotes/quotes';



const characterStackNavigator = createStackNavigator();
export const characterStack = ()=>{
    return(
        <characterStackNavigator.Navigator>
            <characterStackNavigator.Screen name='character' component={characterScreen} options={characterScreenOptions}/>
            <characterStackNavigator.Screen name='overview' component={overviewScreen} options={overviewScreenOptions}/>
         </characterStackNavigator.Navigator>
    )
}

const overviewStackNavigator = createStackNavigator();
export const overviewStack = ()=>{
    return(
        <overviewStackNavigator.Navigator>
            <overviewStackNavigator.Screen name='overview' component={overviewScreen} options={overviewScreenOptions}/>
         </overviewStackNavigator.Navigator>
    )
}


const episodesStackNavigator = createStackNavigator();
export const episodesStack = ()=>{
    return(
        <episodesStackNavigator.Navigator>
            <episodesStackNavigator.Screen name='episodes' component={episodesScreen} options={episodesScreenOptions}/>
            <episodesStackNavigator.Screen name='episodesCharacter' component={episodesCharacterScreen} options={episodesCharacterScreenOptions}/>
         </episodesStackNavigator.Navigator>
    )
}

const episodesCharacterStackNavigator = createStackNavigator();
export const episodesCharacterStack = ()=>{
    return(
        <episodesCharacterStackNavigator.Navigator>
            <episodesCharacterStackNavigator.Screen name='episodesCharacter' component={episodesCharacterScreen} options={episodesCharacterScreenOptions}/>
         </episodesCharacterStackNavigator.Navigator>
    )
}

const quotesStackNavigator = createStackNavigator();
export const quotesStack = ()=>{
    return(
        <quotesStackNavigator.Navigator>
            <quotesStackNavigator.Screen name='quotes' component={quotesScreen} options={quotesScreenOptions}/>
         </quotesStackNavigator.Navigator>
    )
}



// step 4 - Create Bottom Bar

const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar = ()=>{
    return(
        <AppBottomBarNavigator.Navigator activeColor='#ffffff' inactiveColor='#222222' barStyle={{ backgroundColor:'green' }}>



            <AppBottomBarNavigator.Screen 
            options =
            {
                {
                    tabBarLabel :'Character',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'view-dashboard' : 'view-dashboard-outline';
                        const iconColor = focused ? '#ffffff' : '#222222';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            name='Character' 
            component = {characterStack} />




            <AppBottomBarNavigator.Screen 
            name='Episodes' 
            component = {episodesStack}
            options=
            {
                {
                    tabBarLabel :'Episodes',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'tshirt-crew' : 'tshirt-crew-outline';
                        const iconColor = focused ? '#ffffff' : '#222222';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            />



            <AppBottomBarNavigator.Screen 
            name='Quotes' 
            component = {quotesStack}
            options=
            {
                {
                    tabBarLabel :'Quotes',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'cart' : 'cart-outline';
                        const iconColor = focused ? '#ffffff' : '#222222';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            />



            </AppBottomBarNavigator.Navigator>
    )
}