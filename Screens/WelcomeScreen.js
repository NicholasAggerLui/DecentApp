import React, { useEffect } from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import allActions from '../src/js/action/index' 
import SubmitButton from '../components/SubmitButton';
import {auth} from '../Utility/FirebaseService'


function WelcomeScreen({navigation}){
    
    const user = auth.currentUser
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(user)
    },[user])

    return(
        <View style={styles.container}> 
            <SubmitButton title={'Welcome'} pressed={()=>  navigation.navigate('SignIn')}></SubmitButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#54ADDA',
        justifyContent: 'center',
    },
    textStyle:{
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 50
    }
})


export default WelcomeScreen;