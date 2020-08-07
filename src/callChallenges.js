import React, {Component} from 'react';
import './App.css';
import Challenges from './challengesList.js';
import './callChallenges.css';
import UserPage from './userPage.js';
import PushChallenge from './pushchallenge';


class CallChallenges extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentChallenge: Challenges[props.index],
      click: props.complete,
    }
  }


 clicked = () => {
   PushChallenge(this.state.currentChallenge, this.props.index);
   this.setState({
     click: true
   });
 };


 render(){
   if(this.state.click===true) {
    return(
    <div>
        <div className="boxed">
          {this.state.currentChallenge.Title}
          <div className = "button" id = "button">
            <button type="button" className="completed-button" disabled>completed</button>
          </div>

        </div>
        {/*<PushChallenge challenge = {this.state.currentChallenge} index = {this.props.index}/>*/}
    </div>
    );
   }else{
    return(
      <div class="boxed">
        {this.state.currentChallenge.Title}
        <div className = "button" id = "button">
          <button type="button" className="harry-styles" onClick={() => this.clicked()}> complete</button>
        </div>
      </div>
    );
   }
 }
}
export default CallChallenges;
