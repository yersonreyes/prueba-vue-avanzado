import Firebase from "firebase";

Firebase.initializeApp({
  apiKey: "AIzaSyA2NMfCQ5Hxqu2qySSCjejP8bV6MvJvy80",
  authDomain: "prueba-vue-8d6ad.firebaseapp.com",
  projectId: "prueba-vue-8d6ad",
  storageBucket: "prueba-vue-8d6ad.appspot.com",
  messagingSenderId: "119559055436",
  appId: "1:119559055436:web:87a9c7d6d711312a69ece9",
});

export const DB = Firebase.firestore();
