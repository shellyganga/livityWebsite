import React, {Component} from 'react';
/*
import firebase from './Firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
*/
import CallChallenges from './callChallenges'

const Listchallenges = (props) => {

  let data = props.data;
  console.log(data);

  return(
    <div>
      <CallChallenges index = {data[0].index} complete = {data[0].complete} />
      <CallChallenges index = {data[1].index} complete = {data[1].complete} />
      <CallChallenges index = {data[2].index} complete = {data[2].complete} />
      <CallChallenges index = {data[3].index} complete = {data[3].complete} />
      <CallChallenges index = {data[4].index} complete = {data[4].complete} />
    </div>
  )

}

export default Listchallenges;
