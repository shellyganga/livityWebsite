import React from 'react';
import './carbonForm.css';
import firebase from "./Firestore";
import Pushcfdata from "./pushcfdata"

class CarbonForm extends React.Component{

  constructor(){
  	super();
  	this.state = {
    	response1: null,
    	response2: null,
      response3: null,
      response4: null,
      carbonScore1: null,
      carbonScore2: null,
      carbonScore3: null,
      carbonScore4: null,
      carbonScoreAve: null
  	};
  }
  clicked = () => {
    console.log(this.state.carbonScoreAve);
    Pushcfdata(this.state.carbonScoreAve);
    this.setState({
      click: true
    });
  };
  // calculateSum = () => {
  //   this.setState({
  //     click: true
  //   });
  // };
  // updateInput = e => {
  // 	this.setState({
  //   	[e.target.name]: e.target.value
  // 	});
  // }
  //
  // addUser = e => {
  // 	//prevents automatic refresh of page when form is submitted
  // 	e.preventDefault();
  //
  // 	const db = firebase.firestore();
  // 	db.settings({
  //     	timestampsInSnapshots: true
  // 	});
  // 	const userRef = db.collection("users").add({
  //       response1: this.state.response1,
  //       response2: this.state.response2,
  //       response3: this.state.response3,
  //       response4: this.state.response4
  // 	});
  //
  // 	this.setState({
  //   	response1: "",
  //     response2: "",
  //     response3: "",
  //     response4: ""
  // 	});
  // }
  handleChange = (event) => {
        // event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            carbonScore1: event.target.carbonScore1,
            carbonScore2: event.target.carbonScore2,
            carbonScore3: event.target.carbonScore3,
            carbonScore4: event.target.carbonScore4,
            carbonScoreAve: event.target.carbonScoreAve,
            click: false
        });
    }

handleSubmit = (event) => {
   if(this.state.response1 == null || this.state.response2 == null || this.state.response3 == null || this.state.response4 == null){
     alert("One or more fields are blank");
   }else{
     this.state.carbonScore1 = this.calculate(71, this.state.response1, this.state.carbonScore1)
     console.log("1 " + this.state.carbonScore1);
     //i am assuming 1 trash bag per day is average
     this.state.carbonScore2 = this.calculate(14, this.state.response2, this.state.carbonScore2)
     console.log("2 " + this.state.carbonScore2);
     //average extricity bill is 110
     this.state.carbonScore3 = this.calculate(220, this.state.response3, this.state.carbonScore3)
     console.log("3 " + this.state.carbonScore3);
     //average amount of shower time per day 10
     this.state.carbonScore4 = this.calculate(20, this.state.response4, this.state.carbonScore4)
     console.log("4 " + this.state.carbonScore4);

     this.state.carbonScoreAve = (this.state.carbonScore1 + this.state.carbonScore2 + this.state.carbonScore3 + this.state.carbonScore4)/4
     console.log(this.state.carbonScoreAve)

     alert("Your CarbonFootprint data has changed!")

   }
    event.preventDefault();

    this.clicked();



      //average american drives 250 miles per week

      // if(this.state.response1>200 & this.state.response1<300)
      // {
      //   carbonScore = 5
      // }else if(this.state.response1<200)
      // {
      //   carbonScore = 1
      // }else if()
      //
      // }


}
  calculate = (max, response, score) => {
    if(.10*max>=response){
      return score=1
    }else if(.20*max>=response){
        return score=2
    }else if(.30*max>=response){
        return score=3
    }else if(.40*max>=response){
          return  score=4
    }else if(.50*max>=response){
      return   score=5
    }else if(.60*max>=response){
       return score=6
    }else if(.70*max>=response){
      return   score=7
    }else if(.80*max>=response){
      return  score=8
    }else if(.90*max>=response){
         return score=9
    }else if(1*max>=response || response>=max){
      return score=10
    }
  };






  render(){
	return (
    	<form onSubmit={this.handleSubmit}>
        <div>
          <div className="carbonform-questions">
          how many miles do you drive per day?
          </div>
          <input
              class="responseclass"
            	type = "number"
            	name = "response1"
            	className="response" placeholder = "response"
            	onChange = {this.handleChange}
            	value = {this.state.response1}
              min = {0}

        	/>

          <div className="carbonform-questions">
          how many trash bags do you fill per week?
          </div>
        	<input
            	type = "number"
            	name = "response2"
              className="response" placeholder = "response"
            	onChange = {this.handleChange}
            	value = {this.state.response2}
              min = {0}
        	/>
          <div className="carbonform-questions">
          what was the cost of your most recent electricity bill?
          </div>
        	<input
            	type = "number"
            	name = "response3"
            	className="response" placeholder = "response"
            	onChange = {this.handleChange}
            	value = {this.state.response3}
              min = {0}
        	/>
          <div className="carbonform-questions">
          what is the average amount of time you spend showering per day?
          </div>
        	<input
            	type = "number"
            	name = "response4"
            	className="response" placeholder = "response"
            	onChange = {this.handleChange}
            	value = {this.state.response4}
              min = {0}
        	/>
        </div>
        	<button class="submit-button" type = "submit" >Submit</button>
    	</form>
	);
  }

}

export default CarbonForm;
