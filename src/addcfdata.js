import React, {Component} from 'react';
import ReactDoM from 'react-dom';
import firebase from './Firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Challenges from './challengesList';

const Addcfdata = () => {

  firebase.auth().onAuthStateChanged(user => {

    if(user){

      const db = firebase.firestore();

      const userRef = db.collection("UserData");

      userRef.doc(user.uid).get().then(getDoc => {

        let currcfdata = getDoc.data().footprint;
        let lastcfdata = currcfdata[currcfdata.length-1];
        let newcfdata = {
          timestamp: new Date(Date.now()),
          value: getDoc.data().cfnum
        }

        let lastcftime = new Date(lastcfdata.timestamp.toDate());
        let newcftime = new Date(newcfdata.timestamp);

        for(var i = 0; i < currcfdata.length; i++){
          console.log(currcfdata[i].timestamp)
          currcfdata[i].timestamp = new Date(currcfdata[i].timestamp.toDate());
        }

        currcfdata.push(newcfdata)
        console.log(currcfdata)


        let newdaily = [];
        for(var i = 0; i < 5; i++){
          newdaily.push({
            index: Math.floor(Math.random()*Challenges.length),
            complete: false
          });
        }


        if((lastcftime.getDate() !== newcftime.getDate()) || (lastcftime.getMonth() !== newcftime.getMonth())){
          userRef.doc(user.uid).set({
            username: getDoc.data().username,
            email: getDoc.data().email,
            footprint: currcfdata,
            challenge: getDoc.data().challenge,
            dailychallenge: newdaily,
            cfnum: getDoc.data().cfnum
          })
        }

      })

    }
  })

  return(
    <div />
  )
}

export default Addcfdata;
