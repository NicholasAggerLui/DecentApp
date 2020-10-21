import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {useQuery, useQueryCache,QueryCache} from 'react-query'
import _ from 'lodash'
import RatesListView from '../components/RatesList/RatesListView';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../src/js/action';
import ExpandPanel from '../components/ExpandPanel';
import RateExpandView from '../components/RateExpandView'
import useRates from '../src/js/Hook/useRates';
import LoadingIndicator from '../components/LoadingIndicator';
import dayjs from 'dayjs' 
import { setFocusHandler } from 'react-query'
import { AppState } from 'react-native'

const DiscoverScreen = ()=>{

    const dispatch = useDispatch()
    const isToggle = useSelector(state => state.rates.isOpen)
    const [refresh, setRefresh] = useState(false);
    const [cachedData,setCachedData] = useState('')

    var base = 'USD'
    const {status, data, error,isFetching,isFetched} = useRates(base)
    const cached = useQueryCache().getQueryData(['rates',base])

    const onClose =()=>{
        dispatch(allActions.rates.onCollapseView())
    }
    
    // setFocusHandler(() => {
    //     const handleAppStateChange = appState => {
    //       if (appState === 'active') {
            
    //       }else if (appState === 'background'){
            
    //       }
    //     }
    //     AppState.addEventListener('change', handleAppStateChange)
    //     return () => AppState.removeEventListener('change', handleAppStateChange)
    //   })
  
    return(
        <View style={{ flex: 1,backgroundColor: '#dac454',justifyContent: 'space-around'}}>
           {status == 'success'?
             <RatesListView data={data} extraData={cached}></RatesListView>:
          <View></View>
            }
          <Text style={styles.HeaderText}>{'* All currency Rates by Fixer.io '+' ** Update Hourly'}</Text>
          <ExpandPanel closePanel={() => onClose()} onClose={()=> onClose()} isPanelActive={isToggle} ContentView={<RateExpandView/>}>       
          </ExpandPanel>
          <LoadingIndicator isLoading={isFetching}></LoadingIndicator>
        </View>
    )
}
const styles = StyleSheet.create({
    HeaderText:{
        fontSize: 14,
        marginTop: 20,
        fontWeight: '400',
        marginLeft: 30,
        color: 'white',
    }
})

export default DiscoverScreen