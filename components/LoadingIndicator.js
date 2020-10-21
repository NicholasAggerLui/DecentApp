import React from 'react';
import { View,ActivityIndicator,StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const LoadingIndicator = ({isLoading}) =>{
    if(isLoading){
      
     return <View style={styles.container}>
    <BlurView intensity={50} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}/>
    <ActivityIndicator size={'large'} color={'black'}/>
    </View>
    }else{
        return null
    }
}
const styles = StyleSheet.create({
    container: {  
    position: 'absolute',
    left: 0,
    right: 0,
    top: 30,
    bottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
   
    },
    // blurViewContainer: {
    //     flex: 1,
    // }
  });
export default LoadingIndicator