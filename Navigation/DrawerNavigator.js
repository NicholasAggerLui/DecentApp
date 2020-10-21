import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainScreen from '../Screens/MainScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DiscoverScreen from '../Screens/DiscoverScreen';
import SettingScreen from '../Screens/SettingScreen';

const Drawer = createDrawerNavigator()

const DrawerScrean = ()=>{
    return(
        <Drawer.Navigator  initialRouteName='Main'>
            <Drawer.Screen name='Main' component={MainScreen}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
            <Drawer.Screen name='Discover' component={DiscoverScreen}/>
            <Drawer.Screen name='Setting' component={SettingScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerScrean