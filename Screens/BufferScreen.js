import { View,Text,StyleSheet,Keyboard } from 'react-native';
import React, {useEffect, useState} from 'react';
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import allActions from '../src/js/action/index';



function BufferScreen(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(allActions.auth.reset())
        dispatch(allActions.user.onCheckCurrentUser())
    },[])

    const onPress = ()=>{

    }
    return(
        <View style={styles.container}>
        <SubmitButton title={'Skip'} pressed={()=> onPress()}></SubmitButton>
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

export default BufferScreen