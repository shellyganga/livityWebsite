import React, {Component} from 'react';
import Navbar from './navbar';
import './App.css';
import picture from './coolmascot.png'

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
          <Navbar />
          <div className="display_wrapper">
              <img className="img" src={picture} />
              <div className="text">
                  <h1> <br/>welcome </h1>
                  <p><br/>Complete daily challenges and find out how you impact the environment. Sign up and track your carbon footprint!</p>
              </div>
          </div>
      </div>

    );
  }
}

export default App;
