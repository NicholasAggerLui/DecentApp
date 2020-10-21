import {CHANGE_DISPLAYNAME, CHANGE_EMAIL, CHANGE_PHONENUMBER, CHECK_USER, CHNAGE_PHOTOURL, CLEAR_USER, SAVE_USER} from '../types/user'
import {auth,db} from '../../../Utility/FirebaseService'
import { navigate } from '../../../Navigation/StackNavigator'

const checkUser = user =>{

    return{
        type: CHECK_USER,
        payload: user
    }
}

const saveUserData = (displayName,email,phoneNumber,photoURL,providerId,uid)=>{
    return{
        type: SAVE_USER,
        displayName,email,phoneNumber,photoURL,providerId,uid
    }
}

const onSaveUser = (displayName,email,phoneNumber,photoURL,providerId,uid )=> async dispatch=>{
    try {
        db.collection('Users').doc(uid).set({
            'displayName':displayName,
            'email':email,
            'phoneNumber':phoneNumber,
            'photoURL':photoURL,
            'providerId':providerId,
            'uid':uid
        })
        dispatch(saveUserData(displayName,email,phoneNumber,photoURL,providerId,uid))
    }catch(err){
       // console.log(err)
    }
}

const clearUser = ()=>{
    return{
        type: CLEAR_USER
    }
}
const changeDisplayName = (displayName)=>{
    return{
        type: CHANGE_DISPLAYNAME,
        payload: displayName
    }
}
const changeEmail = (email)=>{
    return{
        type: CHANGE_EMAIL,
        payload: email
    }
}
const changePhotoURL = (photoURL)=>{
    return{
        type: CHNAGE_PHOTOURL,
        payload: photoURL
    }
}
const changePhoneNumber = (phoneNumber)=>{
    return{
        type: CHANGE_PHONENUMBER,
        payload: phoneNumber
    }
}

const onCheckCurrentUser = ()=> async dispatch=>{

    try {
        auth.onAuthStateChanged((user)=>{
            if(user){
                dispatch(
                    onSaveUser(user.displayName,user.email,user.phoneNumber,
                        user.photoURL,user.providerId,user.uid))
                navigate('Main')
            }else{
                navigate('Welcome')
            }
        })

    }catch(err){
        navigate('Welcome')
    }
}


export default {
checkUser,onSaveUser,onCheckCurrentUser,clearUser,
changeDisplayName,changeEmail,changePhotoURL,changePhoneNumber
}