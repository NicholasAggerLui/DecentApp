import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import {BlurView} from 'expo-blur'

const MainListItem = ({item,pressedItem})=>{
    return(
        <TouchableOpacity onPress={pressedItem}>
       
        <View style={styles.container}>
           
                <Text style={styles.detailStyle}>{'  Offer:'+item.amount +item.offerCurrency}</Text>
                <Text style={styles.detailStyle}>{'  Request:'+item.requestCurrency}</Text>
            
        </View>
      
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: '#0f3d66',
        elevation: 2,
        width: Dimensions.get("window").width-26,
        height: 115,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 5,
    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
    detailStyle:{
        color: 'white'
    }  
})

export default MainListItem