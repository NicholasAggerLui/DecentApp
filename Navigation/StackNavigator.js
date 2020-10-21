import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import WelcomeScreen from '../Screens/WelcomeScreen'
import SignInScreen from '../Screens/SignInScreen'
import AuthOTPScreen from '../Screens/AuthOTPScreen'
import MainScreen from '../Screens/MainScreen'
import SplashScreen from '../Screens/SplashScreen';
import BufferScreen from '../Screens/BufferScreen';
import ProfileScreen from '../Screens/ProfileScreen'
import DrawerContent from './DrawerContent';
import DiscoverScreen from '../Screens/DiscoverScreen';
import SettingScreen from '../Screens/SettingScreen';


const naivigationRef = React.createRef()

function navigate(name, params){
    naivigationRef.current?.navigate(name,params)
}

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
    return(
    <AuthStack.Navigator headerMode='none' initialRouteName={'Splash'}>
        <AuthStack.Screen
            name='Welcome'
            component={WelcomeScreen}/>
        <AuthStack.Screen
            name='SignIn'
            component={SignInScreen}/>
        <AuthStack.Screen
            name='AuthOTP'
            component={AuthOTPScreen}/> 
         <AuthStack.Screen
            name='Splash'
            component={SplashScreen}/>
        <AuthStack.Screen
            name='Buffer'
            component={BufferScreen}/> 
    </AuthStack.Navigator>
)}
const Drawer = createDrawerNavigator()

const DrawerScrean = ()=>{
    return(
        <Drawer.Navigator  initialRouteName='Main' drawerContent={props => <DrawerContent {...props}/> }>
            <Drawer.Screen name='Main' component={MainScreen}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
            <Drawer.Screen name='World' component={DiscoverScreen}/>
            <Drawer.Screen name='Setting' component={SettingScreen}/>
        </Drawer.Navigator>
    )
}

const RootStack = createStackNavigator()

const RootStackScreen = ()=>{
    return(
    <RootStack.Navigator headerMode='none' initialRouteName='Auth'>
        <RootStack.Screen
        name= 'Auth'
        component={AuthStackScreen}
        options={{
            animationEnabled: false
          }}
        />  
        <RootStack.Screen 
        name='Main'
        component={DrawerScrean}
        options={{
            animationEnabled: false
          }}
        />  
    </RootStack.Navigator>
    )
}
export { RootStackScreen,navigate, naivigationRef}