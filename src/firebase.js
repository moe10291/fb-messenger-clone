import firebase from 'firebase';
require('dotenv').config()


const firebaseApp= firebase.initializeApp({
    
    apiKey: process.env.API_KEY,
    authDomain: "fb-messesnger-clone.firebaseapp.com",
    databaseURL: process.env.DATA_URL,
    projectId: "fb-messesnger-clone",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESG_ID,
    appId: process.env.APP_ID
})

console.log(process.env.STORAGE_BUCKET)
console.log(process.env.API_KEY)

    const db= firebaseApp.firestore();

    export default db;

  