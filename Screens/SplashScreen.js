import { View,Text,StyleSheet,Keyboard } from 'react-native';
import React, {useEffect, useState} from 'react';
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import allActions from '../src/js/action/index';



function SplashScreen(){

    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(allActions.user.onCheckCurrentUser())
    },[])
    return(
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'black',
        justifyContent: 'center',
    },
})

export default SplashScreen