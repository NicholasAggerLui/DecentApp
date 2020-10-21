import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const NoListView = ()=>{

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{'No Data Available at the moment'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    textStyle:{
        fontSize: 18,
        color: 'black'
    }
})

export default NoListView