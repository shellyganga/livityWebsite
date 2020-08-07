import React, {Component} from 'react';
import ReactDoM from 'react-dom';
import firebase from './Firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const PushChallenge = (chal, index) => {

  // let pchallenge = props.challenge;
  // let challengeindex = props.index;
  let pchallenge = chal;
  let challengeindex = index;
  let newchallenge = {
    name: pchallenge.Title,
    value: pchallenge.value,
    timestamp: new Date(Date.now())
  }


  firebase.auth().onAuthStateChanged(user => {
    if(user){

      const db = firebase.firestore();

      const userRef = db.collection("UserData");

      userRef.doc(user.uid).get().then(getDoc => {

        /*userRef.doc(user.uid).challenge.push(newchallenge)*/
        let addchallenge = getDoc.data().challenge;
        addchallenge.push(newchallenge);

        let newdailydata = [];
        getDoc.data().dailychallenge.forEach(element => {
          if(element.index == challengeindex){
            newdailydata.push({
              complete: true,
              index: element.index
            })
          }else{
            newdailydata.push(element);
          }
        })

        let currfootprint = getDoc.data().footprint;
        let newfootprint = [];
        for(var i = 0; i < currfootprint.length-1; i++){
          newfootprint.push(currfootprint[i]);
        }
        newfootprint.push({
          timestamp: currfootprint[currfootprint.length-1].timestamp,
          value: currfootprint[currfootprint.length-1].value*0.8
        })

        console.log(addchallenge)
        userRef.doc(user.uid).set({
          username: getDoc.data().username,
          email: getDoc.data().email,
          footprint: newfootprint,
          challenge: addchallenge,
          dailychallenge: newdailydata,
          cfnum: getDoc.data().cfnum
        })



      })

    }
  })

}



export default PushChallenge;
