import React, {Component} from 'react';
import firebase from './Firestore';
import './login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};
class Login extends Component {

  constructor(){
    super();
    this.state = {signedIn: false, currentUser: null};
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          signedIn: true,
          currentUser: user
        });

        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });

        const userRef = db.collection("UserData");

        userRef.doc(user.uid).get().then(getDoc => {
          if (!getDoc.exists){
            userRef.doc(user.uid).set({
              username: user.displayName,
              email: user.email,
              footprint: [
                {
                  value: 0,
                  timestamp: new Date(Date.now()-(24*60*60*1000))
                },
                {
                  value: 2,
                  timestamp: new Date(Date.now())
                }
              ],
              challenge: [
                {
                  name: "Initial",
                  value: 0,
                  timestamp: new Date(Date.now())
                }
              ],
              dailychallenge: [
                {
                  index: 0,
                  complete: false
                },
                {
                  index: 1,
                  complete: false
                },
                {
                  index: 2,
                  complete: false
                },
                {
                  index: 3,
                  complete: false
                },
                {
                  index: 4,
                  complete: false
                }
              ],
              cfnum: 0
            })
          }
        })
      }
    })
  }

  signOut = () => firebase.auth().signOut().then(() => {
    this.setState({
      signedIn: false,
      currentUser: null
    })
  })

  render(){
    if (this.state.signedIn) {
      return(
        <div className="login-container">
          <h1 className="hello-user">hello <b>{this.state.currentUser.displayName}</b></h1>
          <div className="login-flex">
          <button className="home-button" onClick={this.goHome}>return home</button>
          <button className="sign-out-button" onClick={this.signOut} >sign out</button>
          </div>
        </div>
      );
    } else {
      return(
      <div>
        <a href = "/">Return to Homepage</a>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth = {firebase.auth()}/>
      </div>
      )
    }
  }

  goHome = e => {
    window.location.href = "/";
  }
}

export default Login;
//<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth = {firebase.auth()}/>
