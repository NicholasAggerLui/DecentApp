import React,{useCallback} from 'react';
import { View, FlatList,StyleSheet, Text, Dimensions } from 'react-native';
import {useDispatch} from 'react-redux'
import allActions from '../../src/js/action';
import MainListItem from './MainListItem';

function MainListView({data,onEnd,refresh,refreshing}){

    const dispatch = useDispatch()
    
    const renderListItem =useCallback( ({item}) => (<MainListItem item={item} pressedItem={()=>  dispatch(allActions.general.onExpandView(item))}></MainListItem>),[])
    const listKeyExtractor = (item, index) => index.toString()
    const emptyScreen = useCallback(()=>(
        
        <View style={{ flex: 1,
            height: 650,
            backgroundColor: 'white'}}>
        <Text style={{ fontSize: 18,
              color: 'white'}}>{'No Data Available at the moment'}</Text>
        </View>
    ))
    return(
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderListItem}
                onRefresh={refresh}
                refreshing={refreshing}
                keyExtractor={listKeyExtractor}
                onEndReachedThreshold={0.4}
                onEndReached={onEnd}
                ListFooterComponent={footer()}
                ListEmptyComponent={emptyScreen}
           />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#dac454',
        width: Dimensions.get("window").width,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 670,
        shadowOffset: { width: 2, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,

    }
})
export default MainListView

const footer = ()=>{
    return(
    <View><Text>{''}</Text></View>
    )
}