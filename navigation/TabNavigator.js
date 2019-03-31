import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';

import { createMaterialTopTabNavigator, createTabNavigator } from 'react-navigation';

const TabNavigator = createMaterialTopTabNavigator(
    {
        Profile:{
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
            },
        },
        Home: {
            screen: Home,
            navigationOptions:{
                tabBarLabel: 'Home',
            },
        },
        Matches: {
            screen: Matches,
            navigationOptions:{
                tabBarLabel: 'Matches',
            },
        },
    },    
    {
        tabBarOptions:{
            activeTintColor: "black",
            inactiveTintColor: "black",
            pressColor: "black",
            style:{
                backgroundColor:'white',
                borderTopWidth:1,
                borderTopColor:'#D3D3D3'
            },
            indicatorStyle: {
                backgroundColor: 'black',
            },
            
        },        
    }
);

export default TabNavigator;