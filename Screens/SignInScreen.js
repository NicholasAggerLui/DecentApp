import React, { useState, useEffect,createRef } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import BackButton from '../components/BackButton';
import PhoneInput from '../components/PhoneInput'
import FlagInput from '../components/FlagInput';
import SubmitButton from '../components/SubmitButton';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../src/js/action/index';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebaseConfig from '../Utility/firebaseConfig'
import {FirebaseService,auth} from '../Utility/FirebaseService'
import firebase from 'firebase'

function SignInScreen({navigation}){
    
    const [value, setValue] = useState()
    const initState = useSelector(state => state.auth)
    const recaptchaVerifier = React.createRef(null);
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const statusMsg = useSelector(state => state.auth.statusMsg)

    const dispatch = useDispatch()
    
    const onPress = ()=>{
        const number = '+'+initState.countryCode + initState.num
        setPhoneNumber(number)
        console.log(number)
        dispatch(allActions.auth.onRequestRecapcha(number,recaptchaVerifier))
    }
    const onBack =()=>{
      navigation.goBack()
      dispatch(allActions.auth.reset())
    }

    return(
        <View style={styles.container}>
           <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            />
            <BackButton pressed={()=> onBack()}/>
            <Text>{statusMsg}</Text>
            <View style={styles.combineView}>
            <FlagInput></FlagInput>
            <PhoneInput></PhoneInput>
            </View>
            <View style={styles.buttonContainer}>
          <SubmitButton title={'Submit'} pressed={()=> onPress()}></SubmitButton>
        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
            flex: 1,
            backgroundColor: '#54ADDA',
            justifyContent: 'center'
    },
    combineView:{
            borderBottomWidth: 1.5,
            flexDirection: 'row',
            justifyContent: 'center',
            // alignItems: ,
            borderBottomColor: 'white',
            margin: 5
    },
    buttonContainer:{
            marginTop: 20
    }
})
export default SignInScreen;