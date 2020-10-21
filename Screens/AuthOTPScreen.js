import React, { useState } from 'react';
import { View,StyleSheet, Text, TextInput } from 'react-native';
import BackButton from '../components/BackButton'
import SubmitButton from '../components/SubmitButton'
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../src/js/action';
import firebase from 'firebase/app'

function AuthOTPScreen({navigation}){

    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const vid = useSelector(state => state.auth.vid)

    const onSaveDetails = value => {
        setValue(value)
        dispatch(allActions.auth.changeCode(value))
    }
    const onSubmit = ()=>{
        dispatch(allActions.auth.onCheckRecapcha(vid,value))
    }
    return(
        <View style={styles.container}>
            <BackButton pressed={()=> navigation.navigate('SignIn')}></BackButton>
            <TextInput 
            onChangeText={value => onSaveDetails(value)}
            value={value}
            style={styles.textInput}
            placeholder={'CODE'}
            keyboardType={'phone-pad'}

            ></TextInput>
            <SubmitButton title={'Submit'} pressed={()=> onSubmit()}></SubmitButton>
        </View>

)}

const styles = StyleSheet.create({
    container:{
            flex: 1,
            backgroundColor: '#54ADDA',
            justifyContent: 'center'
    },
    textInput:{
        width: 200,
        fontSize: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20
    }
})
export default AuthOTPScreen