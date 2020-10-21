import React from 'react'
import { Text, StyleSheet,TouchableOpacity } from 'react-native'

function SubmitButton ({pressed,title}){
    return(
    <TouchableOpacity
        onPress={pressed}
        style={styles.container}>
        <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: 220,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }

})
export default SubmitButton;