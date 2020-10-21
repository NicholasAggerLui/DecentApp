import 'expo-firestore-offline-persistence'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import firebaseConfig from './firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const db = firebase.firestore()

export function getCurrentUid(){
    return auth.currentUser.uid()
}
export function getCollection(collection){
    return db.collection(collection)
}
export function getDoc(collection,id){
    return db.collection(collection).doc(id)
}

// firebase paramater
export const CREATED_AT = 'createdAt'
export const DESC = 'DESC'
export const ASC = 'ASC'
export const FIRESTORE_PAGINATION_LIMIT = 8

