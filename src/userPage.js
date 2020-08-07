import React, {Component} from 'react';
import './userPage.css';
import firebase from './Firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Refine from './refinedata'
import Navbar from './navbar';
import Addcfdata from './addcfdata';
import Listchallenges from './listchallenges';
import CarbonForm from './carbonForm.js';
import { Redirect } from 'react-router-dom';


class UserPage extends Component {
  constructor(){
    super();
    this.state = {
      signedIn: false,
      currentUser: null,
      // data: [{value: 50, timestamp: new Date(Date.now())},{value: 25, timestamp: new Date(Date.now())},{value: 25, timestamp: new Date(Date.now())}]
      data:[],
      challengedata: [],
      task:true,
      redirect: false
    };
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        const db = firebase.firestore();
        /*
        db.settings({
          timestampsInSnapshots: true
        });
        */
        const userRef = db.collection("UserData");
        this.setState({
          signedIn: true,
          currentUser: user,
          //data: userRef.doc(user.uid).get().then(getDoc => {getDoc})
        })
        userRef.doc(user.uid).get().then(getDoc => {
          this.setState({
            data: getDoc.data().footprint,
            challengedata: getDoc.data().dailychallenge
          })
        })
      } else {
        this.setState({redirect: true});
      }
      //console.log("changed: " + this.state.currentUser.displayName);
    })

  }
  render(){
    if(this.state.redirect){
      alert("You are not logged in! Please come back after you log in!")
      return(
        <div>
          <Redirect to='/#' />
        </div>
      )
    } else {
      if(this.state.data.length > 0){
        if (this.state.task){
          return(
            <div>
              <Addcfdata />
              <Navbar />
              <section className="userPage_welcome_block">
                <h1 className="userPage_welcome">welcome back!</h1>
                <carbonForm/>
              </section>
              <div className="userPage-flex">
                <div className="taskbar">
                <table>
                  <tr>
                    <td><button className="userpage-button" onClick={this.handleTask}>tasks</button></td>
                    <td><button className="userpage-button" onClick={this.handleForm}>forms</button></td>
                  </tr>
                </table>
                <div className="taskbar-container">
                <Listchallenges data = {this.state.challengedata} />
                </div>
                </div>
                <div className="victory-container">
                <div className="harry-styles-is-hotter-than-ryan-reynolds">
                <h1 id="your-carbon-score">your carbon score!</h1>
                  <Refine data = {this.state.data}  />
                </div>
              </div>
            </div>
            </div>
          );
        }
        else {
          return(
            <div>
              <Navbar />
              <section className="userPage_welcome_block">
                <h1 className="userPage_welcome">welcome back</h1>
                <carbonForm/>
              </section>
              <div className="userPage-flex">
                <div class="taskbar">
                <table>
                  <tr>
                    <td><button className="userpage-button" onClick={this.handleTask}>tasks</button></td>
                    <td><button className="userpage-button" onClick={this.handleForm}>forms</button></td>
                  </tr>
                </table>
                <div className="carbonForm-container">
                <CarbonForm/>
                </div>
                </div>
                <div className="victory-container">
                <div className="harry-styles-is-hotter-than-ryan-reynolds">
                <h1 id="your-carbon-score">your carbon score!</h1>
                  <Refine data = {this.state.data}  />
                </div>
                </div>
              </div>
            </div>
          );
        }
        console.log(this.state.data)
      }
      else {
        return(<div/>);
      }
    }

  }

  handleTask = e => {
    this.setState({task: true});
  }

  handleForm = e => {
    this.setState({task: false});
  }
}
export default UserPage;
