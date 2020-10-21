import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function BackButton({pressed}){

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={pressed}>
            <AntDesign 
            name="left" 
            size={38} 
            color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 50,
        left: 10
    }
})

export default BackButton;

