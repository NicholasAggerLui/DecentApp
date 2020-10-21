import { View,Text,StyleSheet,Keyboard,Dimensions } from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../src/js/action';
import MainListView from '../components/Main/MainListView';
import ExpandPanel from '../components/ExpandPanel'
import LoadingIndicator from '../components/LoadingIndicator';
import MenuButton from '../components/MenuButton';
import { navigate } from '../Navigation/StackNavigator';
import Header from '../components/Header'
import MainExpandView from '../components/Main/MainExpandView';
import AddTradeButton from '../components/Main/AddTradeButton';
import MessageButton from '../components/Main/MessageButton';
import ReqExpandView from '../components/Main/ReqExpandView';

function MainScreen({navigation}){
  
    const [data, setData] = useState(initData)
    const [isReq,setIsReq] = useState(false)
    //redux
    const dispatch = useDispatch()
    const initData = useSelector(state => state.exchangeList.data)
    const initLast = useSelector(state => state.exchangeList.last)
    const initFirst = useSelector(state => state.exchangeList.first)
    const initIsEmpty = useSelector(state => state.exchangeList.isEmpty)
    const isLoading = useSelector(state => state.exchangeList.isLoading)
    const isToggle = useSelector(state => state.general.isOpen)
    
    const isReqToggle = useSelector(state => state.general.isReqOpen)


    const onClose =()=>{
      dispatch(allActions.general.onCollapseView())
    }
   

    const checkPersist = useCallback(()=>{
        dispatch(allActions.exchangeList.checkDataPersist(initFirst,initIsEmpty))
    },[initData])
   
    useEffect(()=>{
        Keyboard.dismiss() 
        checkPersist()
        setData(initData)
      

    },[checkPersist])
  
   const onAddTrade =()=>{
    
    dispatch(allActions.general.onExpandReqView())
    
   }

   const onCloseTrade = ()=>{
    dispatch(allActions.general.onCollapseReqView())
   }
    return(
        <View style={styles.container}>
        <Header customStyles={styles.svgCurve}
        customHeight={110}
        // customTop={20}
        customBgColor="#dac454"
        customWavePattern={'M0,96L34.3,96C68.6,96,137,96,206,122.7C274.3,149,343,203,411,240C480,277,549,299,617,288C685.7,277,754,235,823,197.3C891.4,160,960,128,1029,144C1097.1,160,1166,224,1234,245.3C1302.9,267,1371,245,1406,234.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'}/>
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Ex-it</Text>
        </View>
        <MenuButton onPress={()=> navigation.openDrawer()}/>
        <MainListView data={data} refresh={()=>checkPersist()} refreshing={isLoading} onEnd={()=>dispatch(allActions.exchangeList.nextFetchTrade(initLast))}/>
        <LoadingIndicator isLoading={isLoading}></LoadingIndicator>
          <ExpandPanel closePanel={() => onClose()} onClose={()=> onClose()} isPanelActive={isToggle} 
          ContentView={<MainExpandView/>}>       
          </ExpandPanel>
          
            <View style={styles.bottomSection}>
             <AddTradeButton onPress={()=> onAddTrade()}/>
              <MessageButton/>
            </View>
            <ExpandPanel closePanel={() => onCloseTrade()} onClose={()=> onCloseTrade()} isPanelActive={isReqToggle} 
              ContentView={<ReqExpandView/>}>       
          </ExpandPanel>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#0f3d66',
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
      },
      headerContainer: {
        marginTop: 50,
        marginHorizontal: 10,
        marginBottom: 20
      },
      headerText: {
        fontSize: 18,
        fontWeight: '800',
        color: 'white',
        textAlign: 'center',
        marginTop: 10
      },

      bottomSection:{
        flexDirection: 'row',
        width: Dimensions.get("window").width,
        marginTop: 18,
        justifyContent: 'space-around'
      },
      messageButtonContainer:{
        width: 72,
        height: 72,
        marginTop: 5,
        alignSelf: 'center',
        justifyContent: 'center',
      },
      messageButton:{
        width: 68,
        height: 68,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        borderRadius: 35,
        backgroundColor: '#0f3d66',
      },
      iconStyle:{
        color:'orange',
        alignSelf: 'center',
        
      },
})

export default MainScreen