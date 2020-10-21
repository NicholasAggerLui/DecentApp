import {FETCH_INITIAL_DATA, FETCH_INITIAL_ERROR, FETCH_INITIAL_SUCCESS, FETCH_MORE_DATA, FETCH_MORE_ERROR,FETCH_MORE_SUCCESS, READY_TO_FETCH_MORE, RESET_STATE} from '../types/exchangeList'
import {FIRESTORE_PAGINATION_LIMIT, getCollection,getDoc} from '../../../Utility/FirebaseService'
import { useState } from 'react'
import { firestore } from 'firebase'

const initialFetch = ()=>{
    return{
        type: FETCH_INITIAL_DATA
    }
}
const initialFetchSuccess = (data,last,first)=>{
    return{
        type: FETCH_INITIAL_SUCCESS,
        data,
        last,
        first
    }
}
const initialFetchError = ()=>{
    return{
        type: FETCH_INITIAL_ERROR,    
    }
}
const moreFetch = ()=>{
    return{
        type: FETCH_MORE_DATA
   
    }
}
const moreFetchSuccess = (data,last)=>{
    return{
        type: FETCH_MORE_SUCCESS,
        data,
        last
    }
}
const moreFetchError = ()=>{
    return{
        type: FETCH_MORE_ERROR
    }
}

const resetState = ()=>{
    return{
        type: RESET_STATE
    }
}
 
const checkDataPersist = (first,isEmpty) =>async dispatch =>{
    if(isEmpty == false){
    const ref = getCollection('Trades').orderBy('createdAt','desc').limit(1)
    ref.get().then((snapshot)=>{
        if(snapshot.docs[0].isEqual(first)){
            //first equal show persisted data not call database
            console.log('EQUAL')
        }else{
            //first not equal means new update call database
            dispatch(initialFetchTrade())
            console.log('NOT EQUAL')
        }
    })
    }else{ 
        dispatch(initialFetchTrade())
    }
}

const initialFetchTrade = () => async dispatch =>{
    dispatch(initialFetch())
    try{
    const ref = getCollection('Trades').orderBy('createdAt','desc').limit(FIRESTORE_PAGINATION_LIMIT)

            ref.get().then((snapshot) =>{
                const lastInBatch = snapshot.docs[snapshot.docs.length-1];
                const firstInBatch = snapshot.docs[0]
                const docData = snapshot.docs.map(document => document.data())
               
                dispatch(initialFetchSuccess(docData,lastInBatch,firstInBatch))
                
            })
           
        }catch(error){
            initialFetchError()
        }       
}

const nextFetchTrade =(last)=> async dispatch =>{
    if(last != undefined){
    dispatch(moreFetch())
    try{
    const nextRef = getCollection('Trades').orderBy('createdAt','desc').limit(FIRESTORE_PAGINATION_LIMIT).startAfter(last)

        nextRef.get().then((doc) =>{
            const lastInBatch = doc.docs[doc.docs.length-1]; 
            const docData = doc.docs.map(document => document.data())
            dispatch(moreFetchSuccess(docData,lastInBatch))
       
        })
    }catch(error){
        dispatch(moreFetchError())
        console.log(error)
    }   
    }else{
       
    }
}


const addData = (data)=> async dispatch=>{

    try{

        getCollection('Trades').doc().add({
            data
        }).then((ref)=>{
            console.log('success')
        })

    }catch(err){


    }

}



export default {initialFetchTrade,initialFetchError,addData,nextFetchTrade,checkDataPersist,initialFetchSuccess,moreFetchSuccess,resetState}

