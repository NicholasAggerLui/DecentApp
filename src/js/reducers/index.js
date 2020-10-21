import counter from './counter'
import {combineReducers} from 'redux'
import auth from './auth'
import user from './user'
import exchangeList from './exchangeList'
import rates from './rates'
import general from './general'


const rootReducer = combineReducers({
   counter,
   auth,
   user,
   exchangeList,
   rates,
   general
})

export default rootReducer