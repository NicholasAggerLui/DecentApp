import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackScreen,naivigationRef } from '../Navigation/StackNavigator'
import DrawerScrean from './DrawerNavigator';


export default function MainStackNavigator(){
    return(
        <NavigationContainer ref={naivigationRef}>
            <RootStackScreen/>
        </NavigationContainer>
    )
}

