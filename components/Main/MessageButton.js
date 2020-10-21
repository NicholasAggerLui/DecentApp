import React from 'react';
import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const MessageButton = ()=>{

    return(
        <TouchableOpacity style={styles.messageButtonContainer}>
        <View style={styles.messageButton}>
          <Feather style={styles.iconStyle} name="message-circle" size={32} color="#dac454" />
        </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    messageButtonContainer:{
        width: 72,
        height: 72,
        marginTop: 5,
        alignSelf: 'center',
        justifyContent: 'center',
      },
      messageButton:{
        width: 68,
        height: 68,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        borderRadius: 35,
        backgroundColor: '#0f3d66',
      },
      iconStyle:{
        color:'orange',
        alignSelf: 'center',
        
      },
})
export default MessageButton