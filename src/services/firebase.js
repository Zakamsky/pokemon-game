import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBRQ3h7M-Exx_tpEaiSMF18sc87V-TrQ5I",
    authDomain: "pokemon-game-78789.firebaseapp.com",
    databaseURL: "https://pokemon-game-78789-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-game-78789",
    storageBucket: "pokemon-game-78789.appspot.com",
    messagingSenderId: "853299483693",
    appId: "1:853299483693:web:7a7774d7cceb6e5a4314a4"
};

firebase.initializeApp(firebaseConfig)

export const fire = firebase

export const database = firebase.database()

export default database