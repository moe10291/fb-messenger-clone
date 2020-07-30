import firebase from 'firebase';
require('dotenv').config()


const firebaseApp= firebase.initializeApp({
    
    apiKey: process.env.API_KEY,
    authDomain: "fb-messesnger-clone.firebaseapp.com",
    databaseURL: "https://fb-messesnger-clone.firebaseio.com",
    projectId: "fb-messesnger-clone",
    storageBucket: "fb-messesnger-clone.appspot.com",
    messagingSenderId: process.env.MESG_ID,
    appId: process.env.APP_ID
})


    const db= firebaseApp.firestore();

    export default db;

  