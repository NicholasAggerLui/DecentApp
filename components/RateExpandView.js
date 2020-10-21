import React, { useEffect } from 'react';
import { View,StyleSheet,Text,Image,Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { LineChart } from 'react-native-chart-kit'


const RateExpandView = ()=>{

    const data = useSelector(state => state.rates.data)
    const rateData = {data: [61.6,61.9,61.8,61.8,62.1,62.0,62.0,62.1]}
   
    return(

        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.countryNameStyle}>{data.countryName+'('+data.currency+')'}</Text>
                <Text style={styles.currencyStyle}>{data.base+'/'+data.currency}</Text>
                
                <Text style={styles.ratesStyle}>{data.symbol+data.rates}</Text>
            </View>
            <View style={{marginTop: 10}}>
  
  <LineChart
    data={{
        
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        rateData
      ],
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      legend: ["Day Average"]
    }}
     
    width={Dimensions.get("window").width} // from react-native
    height={300}
    yAxisLabel={data.symbol}
    yAxisSuffix=""
    withInnerLines={false}
    withOuterLines={false}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
    
      backgroundColor: "#0f3d66",
      backgroundGradientFrom: "#0f3d66",
      backgroundGradientTo: "#0f3d66",
      decimalPlaces: 3, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(155, 215, 255, ${opacity})`,

      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "3",
        stroke: "#dac454",
      }
    }}
    
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 0
    }}
  />
    </View>
        <Text style={styles.dateStyle}>{'last update: '+data.time}</Text>
    </View>
    )
}

const styles = StyleSheet.create({

    container:{
     flex:1,
     alignSelf: 'center'
    },
    detailContainer:{
        justifyContent: 'space-around',
        alignSelf: 'center',
      
    },
    countryNameStyle:{
        fontSize: 23,
        color: 'white',
        fontWeight: '300',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    currencyStyle:{
        fontSize: 18,
        color: 'white',
        fontWeight: '200',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    dateStyle:{
        fontSize: 13,
        color: 'white',
        fontWeight: '200',
        alignSelf: 'center',
        marginTop: 5
    },
    ratesStyle:{
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 5
    },
    chartStyle:{
        height: 280,
        width: 300
    }


})

export default RateExpandView