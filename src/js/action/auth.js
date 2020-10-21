import {CHANGE_COUNTRY,CHANGE_NUM,CHANGE_COUNTRYCODE,RESET_STATE,RECAPCHA_REQUEST,RECAPCHA_ERROR,STATUS_MSG, CHANGE_CODE,LOGOUT, SIGNIN_SUCCESS, SIGNIN_ERROR} from '../types/index'
import firebase from 'firebase/app';
import {auth} from '../../../Utility/FirebaseService';
import {navigate} from '../../../Navigation/StackNavigator'
import allActions from '.';

 
const changeCountry = (country) => ({
    type: CHANGE_COUNTRY,
    payload: country
  })
const changeCountryCode = (countryCode) => ({
    type: CHANGE_COUNTRYCODE,
    payload: countryCode
})  

const changeNum = (num) => {
    return {
        type: CHANGE_NUM,
        payload : num
    }
}
const reset =()=>{
    return {
        type: RESET_STATE
    }
}
const changeCode =(vCode) =>{
    return{
        type: CHANGE_CODE,
        payload: vCode
    }
}
const changeStatus = (statusMsg) =>{
    return{
        type: STATUS_MSG,
        payload: statusMsg
    }
}
const logout = () =>{
    return{
        type: LOGOUT,
    }
}
const recapchaRequest=(vid,statusMsg)=>{
    return{
        type: RECAPCHA_REQUEST,
        vid,
        statusMsg
    }
}
const recapchaError = (statusMsg)=>{
    return{
        type: RECAPCHA_ERROR,
        statusMsg
    }
}
const signInSuccess = (statusMsg,user)=>{
   return{
        type: SIGNIN_SUCCESS,
        statusMsg,
        user
    }
}
const signInError = (statusMsg)=>{
    return{
        type: SIGNIN_ERROR,
        statusMsg
    }
}

const onRequestRecapcha =(phoneNumber,verifier)=> async dispatch =>{

 try {
    const phoneProvider = new firebase.auth.PhoneAuthProvider() ;
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      verifier.current
    );
    const status = 'Verification code has been sent to your phone.'
    dispatch(recapchaRequest(verificationId,status))
    navigate('AuthOTP')
  } catch (err) {
    dispatch(recapchaError(err.message));
  }
}

const onCheckRecapcha =(verificationId,verificationCode)=> async dispatch=>{
    try {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
        await auth.signInWithCredential(credential).then((user)=>{
            if(user.user.uid){
                const status = 'Phone authentication successful'
                dispatch(signInSuccess(status,user.user.uid))
                navigate('Buffer')
            }
           
        }).catch((error)=>{
            dispatch(signInError(error.message))
            navigate('SignIn')
        })
        
      } catch (err) {
        dispatch(signInError(err.message))
        navigate('SignIn')
      }
}

const onLogout =()=> async dispatch=>{
    try{
        await auth.signOut().then(()=>{
            dispatch(reset())
            navigate('Splash')
            dispatch(allActions.exchangeList.resetState())
            dispatch(allActions.user.clearUser())
        }).catch((err)=>{
            changeStatus(err.message)
            
        })
      
    }catch(err){
        console.log(err)
    }
}

export default {
    changeCountry,
    changeNum,
    changeCountryCode,
    reset,
    onRequestRecapcha,
    changeCode,
    changeStatus,
    onCheckRecapcha,
    logout,
    onLogout,
    signInSuccess,
    signInError
}