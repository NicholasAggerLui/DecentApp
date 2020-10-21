import {CHANGE_COUNTRY,CHANGE_NUM,CHANGE_COUNTRYCODE,RESET_STATE,RECAPCHA_ERROR,RECAPCHA_REQUEST,CHANGE_CODE,STATUS_MSG,SIGNIN_SUCCESS,SIGNIN_ERROR} from '../types/index'

const initalState = {
    country: 'US',
    num: '',
    countryCode: '+1',
    error: '',
    statusMsg: '',
    isLoading: false,
    isUser: false,
    isRequest: false,
    vid: '',
    vCode: '',
    uid:'',
    user: ''
}

const auth = (state = initalState, action)=> {
    switch (action.type){
        case CHANGE_COUNTRY:
            return{
                ...state,
                country: action.payload
            }
        case CHANGE_NUM:
            return{
                ...state,
                num: action.payload
            }
        case CHANGE_COUNTRYCODE:
            return{
                ...state,
                countryCode: action.payload
            }

        case RECAPCHA_REQUEST:

            return{
                ...state,
                isRequest: true,
                vid: action.vid,
                statusMsg: action.statusMsg
            }
        
        case RECAPCHA_ERROR:
            return{
                ...state,
                statusMsg: action.statusMsg,
                isRequest: false,
                vid: '',
                error: action.statusMsg,
            }
        case SIGNIN_SUCCESS:
            return{
                ...state,
                error: '',
                statusMsg: action.statusMsg,
                isUser: true,
                isLoading: false,
                user: action.user
            }
        case SIGNIN_ERROR:
            return{
                ...state,
                statusMsg: action.statusMsg,
                isLoading: false,
                vid:'',
                vCode: '',
            }
        case CHANGE_CODE:
            return{
                ...state,
                vCode: action.payload
            }
            
        case STATUS_MSG:
            return{
                ...state,
                statusMsg: action.payload
            }
        case RESET_STATE:

                return initalState

        default: return state    
    }
}

export default auth