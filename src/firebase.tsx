import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBmIA8ubJcQrThPIncfn8_iquxz6ugH9b4",
  authDomain: "aulareactfirebase-a0f5b.firebaseapp.com",
  projectId: "aulareactfirebase-a0f5b",
  storageBucket: "aulareactfirebase-a0f5b.appspot.com",
  messagingSenderId: "554040040624",
  appId: "1:554040040624:web:05e220a494ae97c7512f75"
};


if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

export default firebase;