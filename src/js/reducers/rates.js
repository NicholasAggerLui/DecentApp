import {EXPAND_VIEW,COLLAPSE_VIEW} from '../types/rates'

const initalState = {
    data: null,
    isOpen: false, 
} 

const rates = (state = initalState,action) =>{
    switch(action.type){
        case EXPAND_VIEW:
            return{
                ...state,
                isOpen: true,
                data: action.payload
            }
        case COLLAPSE_VIEW:
            return{
                ...state,
                isOpen: false,
                data: state.data
            }    
        default: return state    
    }
}

export default rates