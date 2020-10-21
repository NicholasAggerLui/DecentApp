import axios from 'axios'
import {useQuery} from 'react-query'
import countryList from '../../../Utility/countryList'
import _ from 'lodash'
import dayjs from 'dayjs' 

const getHistoryRates = async(base) =>{
    var now = dayjs().format('YYYY-MM-DD')
    var startDay = dayjs().subtract(7).format('YYYY-MM-DD')
    const {data} = await axios.get('https://data.fixer.io/api/timeseries?access_key=ef17986ce7be6c8e6e1151f0a8733ba0&start_date='+now+'&end_date='+startDay+'&'+base+'&symbols=USD,AUD,CAD,HKD,KRW,JPY,EUR,TWD,PHP,THB,MYR,CNY,&format=1')
    return data
}

export default function useHistoryRates(base){
    var now = dayjs().format('YYYY-MM-DD')
    var startDay = dayjs().subtract(7).format('YYYY-MM-DD')
    
    return useQuery(['HistoryRate'+now+startDay,base],getHistoryRates,{retry: 2,
        cacheTime: 86400000})
}
