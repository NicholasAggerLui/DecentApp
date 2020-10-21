import React,{useCallback} from 'react';
import { View, FlatList,StyleSheet,Text} from 'react-native';
import RatesCardView from '../RatesCardView';
import {useDispatch} from 'react-redux'
import allActions from '../../src/js/action';


function RatesListView({data,onEnd,onRefresh,refreshing,extraData}){

    const dispatch = useDispatch()
    const renderListItem =useCallback( ({item}) => (<RatesCardView item={item} pressedItem={()=>  dispatch(allActions.rates.onExpandView(item))}></RatesCardView>),[])
    const listKeyExtractor = (item, index) => index.toString()
    const header = ()=> (<View><Text>{'Do not worry we will update for you automatically'}</Text></View>)
    return(
        <View style={styles.container}>
            <FlatList 
                style={styles.flatlistStyle}
                data={data}
                extraData={extraData}
                refreshing={refreshing}
                ListHeaderComponent={null}
                onRefresh={onRefresh}
                renderItem={renderListItem}
                keyExtractor={listKeyExtractor}
                onEndReachedThreshold={0.4}
                onEndReached={onEnd}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 70,
        backgroundColor: 'transparent',
        height: 700
    },
    footerText:{
        fontSize: 18,
        fontWeight: '300',
        marginLeft: 30,
        color: 'white',
        textDecorationLine: 'underline'
    },
    HeaderText:{
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 30,
        color: 'white',
    },
    flatlistStyle:{
        // marginTop: 10
    }
})
export default RatesListView

