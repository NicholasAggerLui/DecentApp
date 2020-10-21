import {CHANGE_PHONENUMBER,CHANGE_DISPLAYNAME, CHANGE_EMAIL, CHECK_USER,CHNAGE_PHOTOURL,CLEAR_USER,SAVE_USER} from '../types/user'

const initialState ={
   
        displayName: null,
        email: null,
        phoneNumber: null,
        photoURL: null,
        providerId: null,
        uid: null,
    
}

const user = (state = initialState, action) =>{
    switch (action.type){
        case CHECK_USER:
            return{
                ...state,
                payload
            }
        case SAVE_USER:
            return{
                ...state,
                    displayName: action.displayName,
                    email: action.email,
                    phoneNumber: action.phoneNumber,
                    photoURL: action.photoURL,
                    providerId: action.providerId,
                    uid: action.uid,
            }
        case CHANGE_DISPLAYNAME:
            return{
                ...state,
                displayName: action.payload
            }
        case CHANGE_EMAIL:
            return{
                ...state,
                email: action.payload
            }    
        case CHANGE_PHONENUMBER:
             return{
                ...state,
                phoneNumber: action.payload
            }  
        case CHNAGE_PHOTOURL:
            return{
                ...state,
                photoURL: action.payload
            }
        
        case CLEAR_USER:
            return initialState
        default: return state

    }


}

export default user 