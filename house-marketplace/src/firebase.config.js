// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuP1PzWWuOeeMn_bzYth5y4OkC9Lr9DTA',
  authDomain: 'house-marketplace-app-30673.firebaseapp.com',
  projectId: 'house-marketplace-app-30673',
  storageBucket: 'house-marketplace-app-30673.appspot.com',
  messagingSenderId: '744626358691',
  appId: '1:744626358691:web:cfcd91622328ee231f3216',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
