import {createStore, applyMiddleware,compose} from 'redux'
import rootReducer from '../reducers/index'
import { persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {apiMiddleware} from 'redux-api-middleware'

//

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth','rates','general'],
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store = createStore(
    persistedReducer,
    applyMiddleware(thunk,apiMiddleware),
 );


 const persistor = persistStore(store)

 export {store,persistor} 







