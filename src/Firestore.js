import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyF_4f_99nLl6ptjiFZ6lkEEgfZ8B2xcE",
    authDomain: "varearth.firebaseapp.com",
    databaseURL: "https://varearth.firebaseio.com",
    projectId: "varearth",
    storageBucket: "",
    messagingSenderId: "185987400116",
    appId: "1:185987400116:web:a91ff69bb1ab203c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
