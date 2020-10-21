import React,{useEffect, useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {useSelector} from 'react-redux'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const MainExpandView = ()=>{
    const selectedData = useSelector(state => state.general.data)
    
    const dateConvert=()=>{
        var seconds = selectedData.createdAt.seconds
        var dataDate = dayjs(seconds*1000).format('YYYY-MM-DD') 
        var dayjsRt = dayjs.extend(relativeTime)
        var date = dayjsRt(dataDate).fromNow()
    
       return date
    }
    
    return(
        <View>
            <Text style={{fontSize: 20,color: 'white'}}>{selectedData.amount}</Text>
            <Text style={styles.dateStyle}>{dateConvert()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dateStyle:{
        fontSize: 13,
        fontWeight: '200',
        color: 'white'
    }   
})


export default MainExpandView