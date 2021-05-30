import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAIS8fBGRquQ318UP6UQrn2nl5Mhul6ZrY",
    authDomain: "project-77-bb8ea.firebaseapp.com",
    projectId: "project-77-bb8ea",
    storageBucket: "project-77-bb8ea.appspot.com",
    messagingSenderId: "240611060602",
    appId: "1:240611060602:web:8086cc3496105d699644c3"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();