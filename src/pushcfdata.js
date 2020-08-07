import React, {Component} from 'react';
import ReactDoM from 'react-dom';
import firebase from './Firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Pushcfdata = (number) => {

  let newnum = number;
  console.log(newnum);

  firebase.auth().onAuthStateChanged(user => {
    if(user){
      console.log("Number is " + number);


      const db = firebase.firestore();

      const userRef = db.collection("UserData");

      userRef.doc(user.uid).get().then(getDoc => {

        userRef.doc(user.uid).set({
          username: getDoc.data().username,
          email: getDoc.data().email,
          footprint: getDoc.data().footprint,
          challenge: getDoc.data().challenge,
          dailychallenge: getDoc.data().dailychallenge,
          cfnum: number
        })

      })

    }
  })

}

export default Pushcfdata;
