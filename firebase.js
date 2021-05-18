import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLrrYz2IIEdjOK5XSSEh3BsNwA30htpz4",
    authDomain: "fb-clone-b7108.firebaseapp.com",
    projectId: "fb-clone-b7108",
    storageBucket: "fb-clone-b7108.appspot.com",
    messagingSenderId: "378204826078",
    appId: "1:378204826078:web:48191f4ab70884725e154f"
  };

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();

  const db = app.firestore();

  const storage = firebase.storage();

  export {db,storage};