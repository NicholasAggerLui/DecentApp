import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SimplePicker from 'react-native-simple-picker'
import countryList from '../../Utility/countryList'
import _ from 'lodash'
import { TextInput } from 'react-native-gesture-handler';

const ReqExpandView = () => {
   
    const countryName = _.map(countryList,'countryName')
    const symbol = _.find(countryList,offerValue,'symbol')

    // Labels is optional
    
    const oPicker = React.createRef(null);
    const rPicker = React.createRef(null);
    const [offerValue,setOfferValue] = useState('Any')
    const [requestValue, setRequestValue] = useState('Any')

    return (
        <View style={{ flex: 1,}}>
          
         <Text
          style={{ color: '#fff', marginTop: 10 }}
          onPress={() => {
            oPicker.current.show()
          }}>
           {'You have '+ offerValue}
        </Text>
        <Text
          style={{ color: '#fff', marginTop: 10 }}
          onPress={() => {
            rPicker.current.show()
          }}>
           {'You want '+ requestValue}
        </Text>
        <TextInput style={styles.amountInput} keyboardType='decimal-pad' placeholder={symbol}></TextInput>
             <SimplePicker
                ref={oPicker}
                options={countryName}
                onSubmit={(option) => {
                    setOfferValue(option)}}/>
                 <SimplePicker
                ref={rPicker}
                options={countryName}
                onSubmit={(option) => {
                    setRequestValue(option)}}/>
            

        </View>
    )
}

const styles = StyleSheet.create({
    amountInput:{
        margin: 10,
        width: 300,
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    }
})

export default ReqExpandView