import React from 'react';
import { View,StyleSheet,Text,Dimensions } from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import { SimpleLineIcons,Fontisto,Octicons,AntDesign } from '@expo/vector-icons'; 
import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';


const DrawerContent = ({props,navigation})=>{
    return(
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <View> 
                    <View style={styles.headerContainer}>
                    <Text style={{fontSize: 22,fontWeight: '500', color: 'white'}}>{getGreeting()}</Text>
                    </View>
                    <View style={styles.selectionContainer}>
                    <DrawerItem 
                        label='Home'
                        icon={()=> <SimpleLineIcons name="home" size={18} color="white"/>}
                        onPress={()=> navigation.navigate('Main')}/>
                    <DrawerItem 
                        label='World'
                        icon={()=><Fontisto name="world-o" size={18} color="white" />}
                        onPress={()=> navigation.navigate('World')}/>
                    <DrawerItem 
                        label='Profile' 
                        icon={()=> <Octicons name="person" size={22} color="white" />}
                        onPress={()=> navigation.navigate('Profile')}/>
                    <DrawerItem 
                        label='Setting' 
                        icon={()=> <AntDesign name="setting" size={18} color="white" />}
                        onPress={()=> navigation.navigate('Setting')}/>
                    </View>
                    
            </View>
                          
        </DrawerContentScrollView>
                 
         </View>
    
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#dac454'
    },
    selectionContainer:{
        marginLeft: 10
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
      },
    headerContainer: {
        marginTop: 20,
        marginHorizontal: 25,
        marginBottom: 20
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 35
      }  
})
export default DrawerContent


const getGreeting = ()=>{
    var greeting = ''
    var hours = new Date().hours;
    
    if(hours > 12){
         return greeting = 'Good Afternoon!';   
    }
    else{
        return greeting = 'Good Morning!';   
    }
}