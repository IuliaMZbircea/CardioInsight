// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJsjFMo5noPrAdhuIa__PAisFuRdw7m9I",
    authDomain: "cardioinsight-ios-app.firebaseapp.com",
    projectId: "cardioinsight-ios-app",
    storageBucket: "cardioinsight-ios-app.appspot.com",
    messagingSenderId: "84250520596",
    appId: "1:84250520596:web:b85bf0d044125374d54b01",
    measurementId: "G-BV7RY25HER"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


