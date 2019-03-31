import React from 'react';
import TabNavigator from './TabNavigator';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import {View, Image} from 'react-native';

const RootStackNavigator = createStackNavigator(
    {
        Main: {
            screen: TabNavigator,
            navigationOptions: { 
                headerTitle: (
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                        <Image 
                            
                            style={{
                                width: 120,
                                height: 50,
                                alignSelf:'center',
                                resizeMode:'contain',
                            }} 
                            source={require("../assets/logo_300x300.jpg")}
                        />   
                    </View>
                    
                ),
                headerTitleStyle: {
                    alignSelf: 'center',
                },         
                headerLayoutPreset: 'center',       
                
            },
        },
    },
    {
        headerMode: 'float',
        
        headerForceInset: {
            forceInset: {top: 'never'},
        }
    }
);

export default RootStackNavigator;