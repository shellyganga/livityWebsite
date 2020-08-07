import React, {Component} from 'react';
import './navbar.css';
import logo from './logo.png';
class Navbar extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
            <div>
            </div>
            <div class="icon">
            <a className = "nav-link " href="/"> <img src={logo} id="logo"/></a>
              <ul class="nav justify-content-end">
                  <li className="nav-item"><a className="nav-link" href="aboutUs">about us</a></li>
                  <li className="nav-item"><a className="nav-link" href="userPage">user page</a></li>
                  <li className="nav-item"><a className="nav-link" href="login">login</a></li>
              </ul>
            </div>
      </div>

    );
  }
}

export default Navbar;
