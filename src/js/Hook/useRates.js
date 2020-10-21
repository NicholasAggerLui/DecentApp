import React,{useState} from 'react';
import axios from 'axios'
import {useQuery} from 'react-query'
import countryList from '../../../Utility/countryList'
import _ from 'lodash'
import dayjs from 'dayjs'

const getRates = async (__,base) =>{
    const {data} = await axios.get('https://data.fixer.io/api/latest?access_key=ef17986ce7be6c8e6e1151f0a8733ba0&base='+base+'&symbols=USD,AUD,CAD,HKD,KRW,JPY,EUR,TWD,PHP,THB,MYR,CNY,&format=1');
    const convertTime = dayjs(data.timestamp*1000).format('YYYY-MM-DD hh:mma')

    const rawData = {
        data:{
        rates: data.rates,
        date: data.date,
        base: data.base,
        time : convertTime
        }, 
      }
      const newData = {
            rates: Object.keys(rawData.data.rates).map((currency, idx) => {
              return {
                currency,
                rates: rawData.data.rates[currency],
                base: rawData.data.base,
                date: rawData.data.date,
                time: rawData.data.time
              };
            })
          };
     
      const res = _(newData.rates).concat(countryList).groupBy('currency').map(_.spread(_.assign)).value()
          console.log(res)
   return res
}


export default function useRates(base){
    var intervalMs = 1800000
    return useQuery(['rates',base],getRates,{retry: 2,
    cacheTime: 1800000,
    refetchInterval: intervalMs,
    refetchOnWindowFocus: "always",staleTime:1800000,refetchOnReconnect: 'always'}
    )
}

