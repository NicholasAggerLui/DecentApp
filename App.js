import React from 'react';
import { StyleSheet, Text, View,YellowBox,AppState } from 'react-native';
import MainStackNavigator from './Navigation/AppNavigation'
//redux
import {Provider} from 'react-redux';
import {store,persistor} from './src/js/store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { setFocusHandler } from 'react-query'

import _ from 'lodash';

import {QueryCache,ReactQueryCacheProvider,ReactQueryConfigProvider} from 'react-query'

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: 'always',
      refetchOnMount: 'always',
    },
  },
})
YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1 ){
    _console.warn(message);
  }
  
};
YellowBox.ignoreWarnings([
  'Require cycle:'
])

export default function App() {
  
  

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ReactQueryCacheProvider queryCache={queryCache} >
              <ReactQueryConfigProvider config={{queries:{cacheTime: 6 * 60 * 10000}}}>
              <MainStackNavigator/>  
              </ReactQueryConfigProvider>  
            </ReactQueryCacheProvider>
       </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
