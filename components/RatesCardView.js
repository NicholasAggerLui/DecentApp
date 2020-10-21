import { database } from 'firebase';
import React from 'react';
import { Text,View, TouchableOpacity,StyleSheet,Image } from 'react-native';
import allActions from '../src/js/action';

const RatesCardView =({item,pressedItem})=>{  
  
    return (
        <TouchableOpacity onPress={pressedItem}>
         <View style={styles.container}>
            <View style={styles.wrapContainer}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} resizeMode={'contain'}  ></Image>
            </View>
            <View style={styles.detailView}>
            <View style={styles.titleTextView}>
                <Text style={styles.countryText}>{item.countryName}</Text>
                <Text style={styles.currencyText}>{item.currency}</Text>
            </View>
            <View style={styles.rateView}>
                 <Text style={styles.rateText}>{item.symbol+' '+item.rates}</Text>
                 <Text style={styles.marginText}>{'+0.02%'}</Text>
            </View>
            </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        justifyContent: 'center',
        backgroundColor: '#0f3d66', //'#0076bc'
        margin:10,
        height: 120,
        width: 360,
        elevation: 2,
        borderRadius: 10,
        shadowOffset: { width: 0.5, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 5,
    },
    wrapContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center'
    },
    imageContainer:{
        flex: 1/3,
        alignSelf:'center',
        margin: 10,
        marginTop: 10,
        marginLeft: 20,
        height: 80,
        width: 80,
        borderRadius: 10,
    },
    image:{
        height: 80,
        width: 80,
    },
    detailView:{
        flex: 2/3,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: 10,
        
    },
    titleTextView:{
        flexDirection: 'column',
        alignContent:'center',
        marginBottom: 10
    },
    countryText:{
        fontSize: 15,
        fontWeight: '800',
        color: 'white',
        marginBottom: 2
    },
    currencyText:{
        fontSize: 14,
        fontWeight: '300',
        color: '#f2f2f2',
    },
    rateView:{
        flexDirection: 'column',
        alignContent:'center',

    },
    rateText:{
        fontSize: 15,
        fontWeight:'600',
        color: 'white',
        marginBottom: 3
    },
    marginText:{
        fontSize: 15,
        fontWeight:'300',
        color: 'lime'
    }
    
})



export default RatesCardView