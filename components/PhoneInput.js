import React, { useState } from 'react';
import {View,TextInput,StyleSheet,TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../src/js/action';

function PhoneInput(){

    const dispatch = useDispatch()
    const [value, setValue] = useState('')   

    const onSaveDetails = value => {
        setValue(value)
        dispatch(allActions.auth.changeNum(value))
      }

    return(
        <TextInput
        onChangeText={value => onSaveDetails(value)}
            value={value}
            style={styles.phoneTextInput}
            placeholder={'Your Number'}
            autoCompleteType={'cc-number'}
            keyboardAppearance={"dark"}
            keyboardType={'phone-pad'}
            clearButtonMode={'always'}
            placeholderTextColor={'#DADADA'}
            focusable={false}
        />
    )
}

const styles = StyleSheet.create({
    phoneTextInput:{
        flex: 1,
        color: 'white',
        fontSize: 20,
        width: 120,
        height: '100%',
        
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    }
})
export default PhoneInput;