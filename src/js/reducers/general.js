import {EXPAND_MAINVIEW,COLLAPSE_MAINVIEW,EXPAND_REQUESTVIEW,COLLAPSE_REQUESTVIEW} from '../types/general'

const initalState = {
    data: null,
    isOpen: false,
    isReqOpen: false,
 
} 

const general = (state = initalState,action) =>{
    switch(action.type){
        case EXPAND_MAINVIEW:
            return{
                ...state,
                isOpen: true,
                data: action.payload
            }
        case COLLAPSE_MAINVIEW:
            return{
                ...state,
                isOpen: false,
                data: state.data
            }    
        case EXPAND_REQUESTVIEW:
            return{
                ...state,
                isReqOpen: true
            }  
        case COLLAPSE_REQUESTVIEW:
            return{
                ...state,
                isReqOpen: false
            }    
        default: return state    
    }
}

export default general