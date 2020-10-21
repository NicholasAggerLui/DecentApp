import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal'
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../src/js/action';

function FlagInput(){

    
    const initCountry = useSelector(state => state.auth)

    const [countriesCode, setCountriesCode] = useState(initCountry.countryCode)
    const [countries, setCountries] = useState(initCountry.country)
    const dispatch = useDispatch()
    

    const onSelect = (country) => {
        setCountries(country.cca2)
        const selectedCountry = dispatch(allActions.auth.changeCountry(country.cca2))
        const selectedCountryCode = dispatch(allActions.auth.changeCountryCode(country.callingCode[0]))
        console.log('selected: '+country.cca2)
        console.log('redux: '+selectedCountry.payload +' +'+selectedCountryCode.payload)   
    }
    return(
    <View style={{ width: 120}}>
        <CountryPicker 
            countryCode={countries}
            containerButtonStyle={styles.flagPicker}
            withCallingCodeButton={true}
            withEmoji={true}
            withCallingCode={true}
            withFlag={true}
            withAlphaFilter={true}
            withFilter={true}
            onSelect={onSelect}
            visible={false}
            withFlagButton={true}
            filterProps={{
                autoFocus: true,
                placeholder: 'Search',
            }}
            theme={{
                fontSize:16,
                flagSizeButton: 30,
                filterPlaceholderTextColor:'white',
                primaryColor: 'white',
                filterPlaceholderTextColor: 'white',
                backgroundColor: '#54ADDA',
                onBackgroundTextColor: '#f8f8ff',
                }
        }>
        </CountryPicker>

    </View>
    )
}

const styles = StyleSheet.create({
    flagPicker:{
        color:'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 120,
    }
})

export default FlagInput