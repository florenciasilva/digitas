import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyArESrDNOrqcPZvntIP04SPcG8-qZjkRpA",
    authDomain: "prueba-957c1.firebaseapp.com",
    databaseURL: "https://prueba-957c1.firebaseio.com",
    projectId: "prueba-957c1",
    storageBucket: "prueba-957c1.appspot.com",
    messagingSenderId: "720830850858",
    appId: "1:720830850858:web:5fbc627053c196de"
  };

const firebaseInit =  firebase.initializeApp(firebaseConfig);

export default firebaseInit;