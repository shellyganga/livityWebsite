import React from 'react';
import App from './App';
import Login from './login';
import Share from './share';
import AboutUs from './aboutUs';
import UserPage from './userPage';
import CallChallenges from './callChallenges.js';
import CarbonForm from './carbonForm';


import { BrowserRouter as Router, Route} from 'react-router-dom';


const Routes = () => (
  <Router>
    <div>
      <Route exact path={"/"} component={() => <App />}/>
      <Route exact path={"/login"} component={() => <Login />}/>
      <Route exact path={"/share"} component={() => <Share />}/>
      <Route exact path={"/aboutUs"} component={() => <AboutUs />}/>
      <Route exact path={"/userPage"} component={() => <UserPage/>}/>
      <Route exact path={"/carbonForm"} component={() => <CarbonForm/>}/>
    </div>
  </Router>
);

export default Routes;
