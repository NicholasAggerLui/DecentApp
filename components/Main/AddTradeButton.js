import React from 'react';
import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const AddTradeButton = ({onPress})=>{

    return(
        <TouchableOpacity onPress={onPress} style={styles.submitButtonContainer}>
        <View style={styles.submitButton}>
            <FontAwesome style={styles.iconStyle} name="exchange" size={26} color="black" />
            <Text style={styles.buttonText}>{'Request'}</Text>
        </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    submitButtonContainer:{
        width: 252,
        height: 80, 
        justifyContent: 'center',
        alignSelf: 'center',
      },
      submitButton:{
        width: 240,
        height: 68,
        flexDirection:'row',
        backgroundColor: '#dac454',
        borderRadius: 30,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        shadowOffset: { width: 1, height: 1, },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      buttonText:{
        color:'black',
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 16
      },
      iconStyle:{
        alignSelf: 'center',
      }
})
export default AddTradeButton