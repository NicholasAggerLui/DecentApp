import React,{useState} from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel'


const ExpandPanel = ({onClose,closePanel,isPanelActive,ContentView})=>{

    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        showCloseButton: true,
        onClose: onClose,
        onPressCloseButton: closePanel,
        closeOnTouchOutside: true,
        allowTouchOutside: false,
        noBackgroundOpacity: true,
        onlyLarge: true,
        closeRootStyle: {backgroundColor: '#dac454'},
        style:{backgroundColor: '#0f3d66',height: 600},
        barStyle:{backgroundColor: '#dac454'}
      });
    return(
    <SwipeablePanel {...panelProps} isActive={isPanelActive}>{ContentView}</SwipeablePanel>
    )}

export default ExpandPanel