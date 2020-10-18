import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCo0nFWiOQHpPBLV07msQlWTT65T6ZVWM8",
    authDomain: "clone-c4e4b.firebaseapp.com",
    databaseURL: "https://clone-c4e4b.firebaseio.com",
    projectId: "clone-c4e4b",
    storageBucket: "clone-c4e4b.appspot.com",
    messagingSenderId: "291099509168",
    appId: "1:291099509168:web:c47f0cd672fb5b44535675"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth() 

  export {db, auth}
  