import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyDenC9_2eLSbB2klGyXpQPIaEle4EbDD8c",
    authDomain: "flash-realm-341715.firebaseapp.com",
    projectId: "flash-realm-341715",
    storageBucket: "flash-realm-341715.appspot.com",
    messagingSenderId: "575496077383",
    appId: "1:575496077383:web:2398dcf0b76881918b7162",
    measurementId: "G-YDRMQDG8KY"
  };
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};