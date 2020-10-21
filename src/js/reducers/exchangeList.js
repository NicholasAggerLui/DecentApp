import {FETCH_INITIAL_DATA,FETCH_MORE_DATA,ADD_TRADE, READY_TO_FETCH_MORE, FETCH_INITIAL_SUCCESS,FETCH_INITIAL_ERROR,FETCH_MORE_SUCCESS,FETCH_MORE_ERROR, RESET_STATE} from '../types/exchangeList'

const initialState = { 
    data: [],
    page: 1,
    last: null,
    willPaginate: false,
    isLoading: false,
    isError: false,
    isEmpty: true,
    first: null,
    errorMsg: null
};

const exchangeList = (state = initialState, action)=> {

        switch(action.type){
            case FETCH_INITIAL_DATA:

                return{
                    ...state,
                    isLoading: true
                }
            case FETCH_INITIAL_SUCCESS:
                return{
                    ...state,
                    data: action.data,
                    last: action.last,
                    first: action.first,
                    isEmpty: false,
                    isError: false,
                    isLoading: false,
                    errorMsg: null
                }
            case FETCH_INITIAL_ERROR:
                return{
                    ...state,
                    isError: true,
                    isLoading: false,
                    errorMsg: 'Error occurs please try again'
                }     
            case FETCH_MORE_DATA:
                return{
                    ...state,
                    isLoading: true
                }
            case FETCH_MORE_SUCCESS:
                    return{
                        ...state,
                        data: [...state.data, ...action.data],
                        last: action.last,
                        isEmpty: false,
                        isError: false,
                        willPaginate: false,
                        isLoading: false
                    }
            case FETCH_MORE_ERROR:
                    return{
                        ...state,
                        isError: true,
                        isLoading: false,
                        errorMsg: 'Error occurs please try again'
                    }               
            case READY_TO_FETCH_MORE:
                return{
                    ...state,
                    willPaginate: true
                }
            case RESET_STATE:
                return initialState
                
            case ADD_TRADE:
                return{
                    ...state,
                    data: action.payload
                }    
            default: return state   
        }


}

export default exchangeList
