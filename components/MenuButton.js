import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';

const MenuButton = ({onPress})=>{
    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
        <Feather name="menu" size={26} color="white" />
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
export default MenuButton